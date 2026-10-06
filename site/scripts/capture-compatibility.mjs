export const compatibility = [
  {
    file: 'crates/layer-render-wgpu/src/present.rs',
    reason: 'Recompute canvas glass when the theme changes the surround (capycanvas a71fa4834).',
    before: `            old[..placement.start] != data[..placement.start] || old[placement.end..40] != data[placement.end..40]
        });
`,
    after: `            old[..placement.start] != data[..placement.start] || old[placement.end..40] != data[placement.end..40]
        });
        let surround = 12..16;
        let restyled = self.camera_data.is_some_and(|old| old[surround.clone()] != data[surround]);
`,
  },
  {
    file: 'crates/layer-render-wgpu/src/present.rs',
    reason: 'Recompute canvas glass when the theme changes the surround (capycanvas a71fa4834).',
    before: '(regions, full, content_damage, camera_changed && !bindings_changed && !content)',
    after: '(regions, full, content_damage, camera_changed && !restyled && !bindings_changed && !content)',
  },
];
