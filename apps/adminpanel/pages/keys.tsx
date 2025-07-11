import KeysPage from '@extensions/keys/adminPages'
import Head from 'next/head'
import { SiteConfig } from 'app/conf'

export default function Page(props:any) {
  const projectName = SiteConfig.projectName

  return (
    <>
      <Head>
        <title>{projectName + " - Keys"}</title>
      </Head>
      <KeysPage.keys.component {...props} />
    </>
  )
}