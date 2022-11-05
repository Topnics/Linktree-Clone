import React from 'react'
import "./links.css"

const data = [
  {
    id: 1,
    title: "Twitter Link",
    link: "http://twitter.com/iam_topwhiz",
    newid: "twitter"
  },

  {
    id: 2,
    title: "Zuri Team",
    link: "https://training.zuri.team/",
    newid: "btn__zuri"
  },

  {
    id: 3,
    title: "Zuri Books",
    link: "http://books.zuri.team/",
    newid: "books"
  },

  {
    id: 4,
    title: "Python Books",
    link: "https://books.zuri.team/python-for-beginners?ref_id=<TemitopeOsi>",
    newid: "book__python"
  },

  {
    id: 5,
    title: "Background check for coders",
    link: "https://background.zuri.team/",
    newid: "pitch"
  },

  {
    id: 6,
    title: "Design Books",
    link: "https://books.zuri.team/design-rules",
    newid: "book__design"
  },

    {
    id: 7,
    title: "Contact Me",
    link: "/contact",
    newid: "contact"
  }
]

const Links = () => {
  return (
    <div className="link_wrapper">
      {
        data.map((list) => (
          <a href={list.link} key={list.id} id={list.newid} className="list_item">{list.title}</a>
          // <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        ))
      }
    </div>
  )
}

export default Links