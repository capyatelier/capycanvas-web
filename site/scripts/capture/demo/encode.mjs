import { spawn } from 'node:child_process';
import { readFile, stat, writeFile } from 'node:fs/promises';

export async function encode(output) {
  const capture = JSON.parse(await readFile(`${output}/capture.json`, 'utf8'));
  const run = args => new Promise((resolve, reject) => {
    const offset=Math.max(0,capture.duration-.32).toFixed(6);
    const filters=`[0:v]fps=24,format=yuv420p,setsar=1,settb=AVTB,setpts=PTS-STARTPTS[body];[1:v]format=yuv420p,setsar=1,settb=AVTB,setpts=PTS-STARTPTS[poster];[body][poster]xfade=transition=fade:duration=0.22:offset=${offset}[video]`;
    const child = spawn('ffmpeg', ['-hide_banner','-loglevel','warning','-y','-f','concat','-safe','0','-i',`${output}/frames.ffconcat`,'-loop','1','-framerate','24','-i',`${output}/poster-1080p.png`,'-filter_complex',filters,'-map','[video]','-r','24','-t',String(capture.duration),'-an',...args], { stdio: ['ignore','ignore','inherit'] });
    child.on('error', reject);
    child.on('exit', code => code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`)));
  });

  console.log('Encoding 1080p WebM');
  await run(['-c:v','libvpx-vp9','-b:v','0','-crf','24','-deadline','good','-cpu-used','2','-row-mt','1','-threads','8','-g','9999',`${output}/sketch-demo-1080p.webm`]);
  const files = await Promise.all(['sketch-demo-1080p.webm'].map(async file=>({file,bytes:(await stat(`${output}/${file}`)).size})));
  await writeFile(`${output}/video.json`, JSON.stringify({width:1920,height:1080,fps:24,duration:capture.duration,locale:capture.locale,theme:capture.theme,files}, null, 2)+'\n');
  console.log(JSON.stringify(files));
}
