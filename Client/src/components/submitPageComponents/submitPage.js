import './submitPage.scss';

function SubmitPage() {
return(
  <section class="index-banner">
  <div className= "bg"></div>
  <div className= "float">
    <div className= "type">
      <div className="title">Submit a link</div>
    <div>
      <label>Link </label> 
      <input ></input> 
    </div>
    <div>   
      <label>Title </label>
      <input></input>
    </div>
    <div id="error" className = "error-2"> </div>
    <div>

        <button >Submit</button>
    </div>
      </div>
  </div>
</section>         
)
}
export default SubmitPage


