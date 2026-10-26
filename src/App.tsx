import { Layout } from '@/components/layout/Layout'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { usePath } from '@/router'
import { PAGE_COMPONENTS } from '@/routes'

export function App() {
  const path = usePath()
  const Page = PAGE_COMPONENTS[path] ?? NotFoundPage
  return (
    <Layout>
      <Page />
    </Layout>
  )
}
