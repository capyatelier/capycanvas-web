# Publish capycanvas.art with GitHub Pages

The **Deploy site** GitHub Actions workflow builds the site and publishes it to
GitHub Pages; the generated `docs/` directory is not committed. Only GitHub and
DNS setup remain. The drawing app at `editor.capycanvas.art` is a separate
deployment, published by **Actions › Deploy editor** in
[capyatelier/capycanvas-release](https://github.com/capyatelier/capycanvas-release).

## 1. Make Cloudflare authoritative (skip if already done)

1. Add `capycanvas.art` in Cloudflare and choose your plan. Review imported
   records, preserving any email records and the editor subdomain.
2. Copy the two nameservers assigned to this zone by Cloudflare.
3. In Porkbun's Domain Management, open the domain's **Details → Nameservers**,
   replace the existing nameservers with those exact two, and save.
4. Wait for Cloudflare to mark the zone active. Make subsequent DNS changes in
   Cloudflare; Porkbun remains the registrar. If DNSSEC is currently enabled
   with the old DNS provider, disable it before changing nameservers, then
   enable it again using Cloudflare's supplied DNSSEC details after activation.

Sources: [Cloudflare zone setup](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/),
[Porkbun nameserver instructions](https://kb.porkbun.com/article/22-how-to-change-nameservers).

## 2. Verify domain ownership in GitHub

In the **capyatelier organization settings → Pages**, add and verify
`capycanvas.art`. GitHub provides a unique TXT record, normally named
`_github-pages-challenge-capyatelier`. Add exactly the name and value shown to
Cloudflare DNS, then click **Verify** in GitHub. Keep this record afterward.
Domain verification is distinct from the repository's custom-domain setting.

Source: [GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

## 3. Choose the repository publishing source

In **capyatelier/capycanvas-web → Settings → Pages**:

- Source: **GitHub Actions**.
- Set **Custom domain** to `capycanvas.art` and save.

The same source setting from the command line:

```sh
gh api -X PUT repos/capyatelier/capycanvas-web/pages -f build_type=workflow
```

The repository must be public for GitHub Pages on the free organization plan,
or use a plan that supports Pages for private repositories. The custom domain
is a repository setting; a `CNAME` file in the build is not used by Actions
deployments. The `github-pages` environment must allow deployments from `main`.

`.github/workflows/deploy.yml` (**Deploy site**) runs on every push to `main` and
from **Actions › Deploy site › Run workflow**. It builds the site, runs the output
and browser checks, uploads `docs/` with `actions/upload-pages-artifact`, and
publishes it with `actions/deploy-pages`. It reads releases with the workflow's
own token and needs no secrets. **Verify site** runs the same checks on pull requests.

Source: [GitHub publishing-source setup](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 4. Add Cloudflare DNS records

Remove conflicting records at `@` or `www`, then add these. Use **DNS only**
(gray cloud) and TTL **Auto**. This keeps GitHub's domain check and TLS issuance
straightforward; GitHub Pages already serves the site through a CDN.

| Type | Name | Content |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `capyatelier.github.io` |

GitHub redirects `www.capycanvas.art` to the configured apex domain. The CNAME
target is the organization domain, **without** the repository name. Do not add
a wildcard record. Keep `editor` pointing to the host that serves the compiled
drawing app; pointing it at this website would not deploy the editor.

Source: [GitHub custom domains and DNS values](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## 5. Enable HTTPS and check the site

Wait for the DNS check and certificate issuance, then enable **Enforce HTTPS**
in repository **Settings → Pages**. GitHub says this option can take up to
24 hours to become available. Keep the DNS records set to DNS only.

Check:

- `https://capycanvas.art/`, `/download/`, `/download/past-versions/`, `/download/ipad-beta/`,
  `/download/android-beta/`, and `/documentation/`.
- `https://www.capycanvas.art/` redirects to the apex.
- Every supported locale, including `/es/`, `/pt-BR/`, `/id/`, `/fr/`, `/de/`,
  `/ru/`, `/th/`, `/vi/`, `/tr/`, and `/it/`, with language selection and both OS themes.
- Demo opens the separately hosted `https://editor.capycanvas.art/`.

Useful DNS checks:

```sh
dig +short NS capycanvas.art
dig +short A capycanvas.art
dig +short AAAA capycanvas.art
dig +short CNAME www.capycanvas.art
```

Source: [GitHub HTTPS setup](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

## Future updates

```sh
npm run check
git add site tests
git commit -m "Update Capy Canvas website"
git push
```

Pushing to `main` runs Deploy site. Never edit the generated HTML; `docs/` is
ignored and every build replaces it.

## After publishing a Capy Canvas release

The Download and Past versions pages are built from the published releases of
[capyatelier/capycanvas](https://github.com/capyatelier/capycanvas/releases).
Publishing a release does not rebuild this site, so after publishing one, run
**Actions › Deploy site** in this repository:

```sh
gh workflow run deploy.yml --repo capyatelier/capycanvas-web
```

Drafts and pre-releases are not shown. To update the online editor, run
**Actions › Deploy editor** in
[capyatelier/capycanvas-release](https://github.com/capyatelier/capycanvas-release);
it is deployed separately from this site.
