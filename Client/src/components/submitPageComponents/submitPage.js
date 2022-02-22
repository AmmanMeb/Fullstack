import './submitPage.scss';

function SubmitPage() {
return(
  <section>
    <div class="centered">
    <div className = "title">Submit a link</div>
    <div  class="field">
      <label for="fullname">Link</label> 
      <input ></input> 
    </div>
    <div class="field">   
      <label for="fullname">Title</label>
      <input></input>
    </div>  

    <div id = "error" className = "error"></div>
    <div>
        <button type="button" class="button-2" >
          Submit
        </button>
     
    </div>
    </div>
 </section>   
)
}
export default SubmitPage


