  
  import Header from "@/Components/Header"
  import Home from "@/app/Home/page"
  import About from "@/app/About/page"
  import Project from "@/app/projects/page"

  

  export default function main(){
    return(
      <div>
        <Header/>
       
        <Home/>
        <About/>
        <Project/>

        {/* <Aboutpage/> */}
        
      </div>
    )
  }