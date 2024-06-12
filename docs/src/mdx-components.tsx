import type { MDXComponents } from 'mdx/types'
import NavContainer from './components/docs/nav-container'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    nav: props => {

      // console.log('asdf')

      if(!props.className?.includes('toc'))
        return <nav {...props} />
      
      return <NavContainer>
        <nav {...props} />
      </NavContainer>

    },
    ...components,
  }
}