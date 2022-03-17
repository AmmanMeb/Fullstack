import './submitPage.scss';

const [link, setLink] = useState ('')
 const [title, setTitle] = useState ('')
 const [doRedirect, setDoRedirect] = useState(false);

 const onSubmit = (event) => {
  event.preventDefault()
  
  if (link.length < 1) {
     return document.getElementById('error').innerHTML = ("Please enter a Link");
    }
    if (title.length < 1) {
      return  document.getElementById('error').innerHTML = ("Please enter a Title");
    }
     apiClient.signUp(link, title) .then((response) => {
       console.log(response)
       if (response === 'Link Created') {
         return setDoRedirect(true);
        }
     })
       .catch(error => {
        console.log('Error found when creating meeting');
    })
 }

function SubmitPage() {
return(
  <section class="index-banner">
  <div className= "bg"></div>
  <div className= "float">
    <div className= "type">
      <div className="title">Submit a link</div>
    <div className="label-1">
      <label>Link </label> 
      <input  type="text" name="link" onChange = {e => {setLink(e.target.value)}}></input> 
    </div>
    <div className="label-2">   
      <label>Title </label>
      <input  type="text" name="title" onChange = {e => {setTitle(e.target.value)}}></input>
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


