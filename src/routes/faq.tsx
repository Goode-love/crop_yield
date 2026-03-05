import Footer from '#/components/Footer'
import SimpleInput from '#/components/SimpleInput'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faq')({
  component: RouteComponent,
})

function RouteComponent() {
    
  return <div>Hello goodness this is your  "/faq"!
    {/* <Footer/> */}

    <SimpleInput></SimpleInput>
    <SimpleInput></SimpleInput>
    <SimpleInput></SimpleInput>
    <SimpleInput></SimpleInput>
    <SimpleInput></SimpleInput>
    <SimpleInput></SimpleInput>
    <SimpleInput></SimpleInput>
    <SimpleInput></SimpleInput>

  </div>
}
