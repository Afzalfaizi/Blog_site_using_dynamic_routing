const blogsdata = [{
  id:1,
  slug:"Top-software",
  descripation:"top 10 software houses in faislabad"
},
{
  id:2,
  slug:"Top-compaines",
  descripation:"top 10 compaines in faislabad"
}
]

export default function Blog({params}:{params:{ slug:string }} ) {
  const selectBlog = blogsdata.filter((item)=> item.slug === params.slug)
  return (
    <div> {selectBlog[0]?.descripation} </div>
  )
}
