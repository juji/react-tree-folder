import createMDX from '@next/mdx'
import rehypeShiki from '@shikijs/rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import toc from '@jsdevtools/rehype-toc'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'wrap'
      }],
      [rehypeShiki, {
        theme: 'github-dark'
      }],
      [toc, {
        headings: ['h2']
      }]
    ],
  },
})

export default withMDX(nextConfig)

