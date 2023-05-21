import React from 'react'
import styles from '../styles/Article.module.scss'
import PageTitle from './PageTitle'
import FeaturedImage from './FeaturedImage'
import { useEffect, useState } from 'react'
import anime from 'animejs'

const Article = ({body, data}) => {
  const [_body, setBody] = useState('')

  const handleBody = (str)=> {
    setBody(str)
  }

  useEffect(()=> {

    const mutated = mutate_tables(body)
    handleBody(mutated[0])

    forceListeners(document, mutated[1])

    const PIH = document.querySelector('.ParentInnerHTML')
    const PIH_children = PIH.children[0].children
    const cs = []
    const observer = new IntersectionObserver(e => {
      e.forEach(el => {
        if(el.isIntersecting) {
          cs.push(el.target)
          const animation = anime ({
            targets: '.PIH_child',
            translateX: [-20, 0],
            opacity: [0,1],
            duration: 500,
            easing: 'easeInOutSine',
            delay: anime.stagger(50)
          })
          animation.play()
        }
        cs.forEach(c => {
          c.classList.remove('PIH_child')
        })
      })
    }, {})
    for(let i = 0; i < PIH_children.length; i++) {
      PIH_children[i].classList.add('PIH_child')
      observer.observe(PIH_children[i])
    }
  })

  return (
    <div className={styles.Article}>
        <div className={`${styles.Article__header}`}>
            <PageTitle title={data.title} subtitle={data?.subtitle} type={data?.type}></PageTitle>
            {data.featured && <FeaturedImage data={data}></FeaturedImage>}
            {/* {console.log(data)} */}
        </div>

      <div className={`${styles.Article__body} ParentInnerHTML`}>
            <div dangerouslySetInnerHTML={{ __html: _body }} />
        </div>
    </div>
  )
}

// Uses the collected data in mount_bad_html
// to force event listeners in each tab.
// It adds functionality to the tabs,
// switching the data inside the table
// to the respective collected data for it.
const forceListeners = (document, data) => {
  const TableNavs = document.querySelectorAll('.Table__Nav')
  const TableWrappers = document.querySelectorAll('.Table__Mobile__Wrapper')
  const Selectors = Array.from(TableNavs).map(e => e.querySelectorAll('li'))
  const ContentAreas = Array.from(TableWrappers).map(e => e.querySelectorAll('td'))

  // For each Table Nav
  Selectors.forEach(s => {
    const _data = data[Selectors.indexOf(s)]
    const _content_area = ContentAreas[Selectors.indexOf(s)]
    const tdata = _data.td
    const theader = _data.th
    const block_size = theader.length
    const total_blocks = tdata.length / block_size
    const blocks = []

    // Divides the data into blocks
    for(let x = 0; x < total_blocks; x++) {
      const block = new Array()
      for(let y = 0; y < block_size; y++) {
        block.push(tdata[y + block_size * x])
      }
      blocks.push(block)
    }

    // For each Selector in the current Nav
    for(let x = 0; x < s.length; x++) {
      const data_block = blocks[x]

      s[x].addEventListener("click", ()=> {

        // Sets the current active tab
        s[x].classList.add("li___table_active")
        s.forEach(selector => {
          if(selector !== s[x]) 
            selector.classList.remove("li___table_active")
        })

        // Sets the respective data_block when clicked
        for(let y = 0; y < _content_area.length; y++) {
          _content_area[y].innerText = data_block[y]
        }

      })


    }
  })
}

// Grabs all tables inside the passed data
// and mutates them into mobile && desktop tables
const mutate_tables = (body) => {
  const parser = new DOMParser()
  const html = parser.parseFromString(body, 'text/html')
  const tables = html.querySelectorAll("table")
  const mutated = []
  const table_data = []

  // Dirty workaround to get possible captions
  tables.forEach(t => {
    const body = html.querySelector("body")
    const caption = body.children[Array.from(body.children).indexOf(t) - 1]
    if(caption) {
      if(caption.innerText.startsWith('%%caption:')) {
        caption.innerText = caption
        .innerText.substring(0 + '%%caption:'.length )
        caption.classList.add('is_caption')
      }
    }
  })

  for(let x = 0; x < tables.length; x++) {
    const els = {
      th: new Array(...tables[x].querySelectorAll("th")),
      td: new Array(...tables[x].querySelectorAll("td"))
    }
    const data = {th: [], td: []}
    data.th.push(...els.th.map(e => e.innerText))
    data.td.push(...els.td.map(e => e.innerText))

    mutated.push(mount_bad_html(
      html,
      tables[x],
      els,
      data
    ))

    table_data.push(data)
  }

  for(let x = 0; x < mutated.length; x++) {
    tables[x].replaceWith(mutated[x])
  }

  // console.log(html.querySelector("body").innerHTML)

  return [html.querySelector("body").innerHTML, table_data]
}

// Mounts the mutated tables, then, returns
// the table and the data collected
const mount_bad_html = (html, original, els, data)=> {
  const estimated_content_size = els.td.length / els.th.length

  const TableContainer = html.createElement('div')
  const TableWrapper = html.createElement('div')
  const TableNavContainer = html.createElement('div')
  const TableNav = html.createElement('div')
  const ul = html.createElement('ul')

  for(let x = 0; x < estimated_content_size; x++) {
    const li = html.createElement('li')
    li.innerText = data.td[x * els.th.length]
    ul.appendChild(li)
  }
  ul.children[0].classList.add("li___table_active")

  const TableMobileWrapper = html.createElement('div')
  const TableMobile = html.createElement('table')
  const tbody = html.createElement('tbody')

  for(let x = 0; x < els.th.length; x++) {
    const tr = html.createElement('tr')
    const th = html.createElement('th')
    const td = html.createElement('td')
    th.innerText = data.th[x]
    td.innerText = data.td[x]
    tr.appendChild(th)
    tr.appendChild(td)
    tbody.appendChild(tr)
  }

  TableContainer.classList.add('Table__Container')
  TableWrapper.classList.add('Table__Wrapper')
  TableNavContainer.classList.add('Table__Nav__Container')
  TableNav.classList.add('Table__Nav')

  TableContainer.appendChild(TableWrapper)
  TableWrapper.appendChild(TableNavContainer)
  TableNavContainer.appendChild(TableNav)
  TableNav.appendChild(ul)


  TableMobileWrapper.classList.add('Table__Mobile__Wrapper')
  TableMobile.classList.add('Table__Mobile')
  
  TableMobileWrapper.appendChild(TableMobile)
  TableMobile.appendChild(tbody)
  
  TableWrapper.appendChild(TableMobileWrapper)

  const clone = original.cloneNode(true)
  clone.classList.add('Table__Desktop')
  TableContainer.appendChild(clone)
  
  return TableContainer
}

export default Article
