import './submitPage.scss';

function SubmitPage() {
return(
  <section class="index-banner">
  <div className= "bg"></div>
  <div className= "float">
    <div className= "type">
      <div className="title">Submit a link</div>
    <div className="label-1">
      <label>Link </label> 
      <input ></input> 
    </div>
    <div className="label-2">   
      <label>Title </label>
      <input></input>
    </div>
    <div id="error" className = "error"> </div>
    <div>

        <button >Submit</button>
    </div>
      </div>
  </div>
</section>         
)
}
export default SubmitPage


