


function Body() {
  const [addProfileInst, setAddProfileInst] = React.useState('addProfInvis')
  const [modalShow, setModalShow] = React.useState('hideModal')
  const [resumes, setResumes]= React.useState([])
  const wrench = 5

  React.useEffect(() => {

    const getResumes = async () => {
      const resp = await fetch('/static/resumes.json');
      if(resp.status == 200){
        //fill this here
        const resumeList = await resp.json();
        console.log(resumeList)
        setResumes(resumeList)
      }
    }
    getResumes();
  }, [])

  return (
      <main>

        {/* Modal Backdrop/Modal */}
          <div className = {`w-100 h-100 modalBackdrop ${modalShow}`}>
            <div className='row justify-content-center'>
              <div className = 'position-relative col-md-3 rounded bg-light mt-5'>
                <div className ='exitModal text-secondary' onClick={()=>setModalShow('hideModal')}>
                 <i className='fa-solid fa-xmark'></i>
                </div>
                <div className='row text-center mt-5 mb-2'>
                  <h3 className='heading text-secondary'>Share your commitment to code<br></br>every day for 100 days:</h3>
                </div>
                <div className = 'row mx-1 mb-3 text-center'>
                  <div className='col-md-12 justify-content-center'>
                    <a href='https://twitter.com/intent/tweet/?text=I%20am%20publicly%20committing%20to%20the%20%23100DaysOfCode%20with%20%404GeeksAcademy!&url=https%3A%2F%2Fsep.4geeksacademy.co%2F' target='_blank'><button className='btn mx-1 twitterBtn'><i className='fa-brands fa-twitter fa-xs'></i> Twitter</button></a>
                    <a href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsep.4geeksacademy.co%2F' target='_blank'><button className='btn mx-1 facebookBtn'><i className='fa-brands fa-facebook fa-xs'></i> Facebook</button></a>
                    <a href='https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fsep.4geeksacademy.co%2F' target='_blank'><button className='btn mx-1 linkedinBtn'><i className='fa-brands fa-linkedin fa-xs'></i> LinkedIn</button></a>
                    <a href='https://www.reddit.com/submit/?url=https%3A%2F%2Fsep.4geeksacademy.co%2F&title=I%20am%20publicly%20committing%20to%20the%20%23100DaysOfCode%20with%20%404GeeksAcademy!' target='_blank'><button className='btn mx-1 redditBtn'><i className='fa-brands fa-reddit fa-xs'></i> Reddit</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Code */}
          <div className='container'>
            <div className='row mt-5 px-5 mb-2 marginFix'>
              <div className='col-md-8 px-0'>
              <span className='text-secondary'><h1 className='heading'><i className='fa-solid fa-graduation-cap'></i> Learn In Public</h1></span>
                <p>Learning to code is hard, why do it alone? Share your profile, accomplishments and frustrations with the rest of the 4Geeks community!</p>
              </div>
              <div className='col-md-4'>
                <button className='btn btn-light w-100 py-2 whiteBtn' onClick={()=>addProfileInst == 'addProfInvis' ? setAddProfileInst('addProfVis') : setAddProfileInst('addProfInvis')}><span className='lrgBtnText'><i className='fa-solid fa-circle-plus text-success'></i> Add yourself to this list</span></button>
                <button className='btn btn-primary w-100 py-2 mt-2' onClick={()=>setModalShow('showModal')}><span className='lrgBtnText'><i className='fa-solid fa-share-nodes'></i> Share Your commitment</span></button>
              </div>
              <div className = 'px-0'>
                <a href='https://www.100daysofcode.com/' target='_blank'><button className='btn btn-sm btn-dark'>100DaysOfCode.com</button></a>
                <a href='https://www.swyx.io/learn-in-public' target='_blank'><button className='btn btn-sm btn-dark mx-2'>Why Learn in Public</button></a>
                <a href='https://twitter.com/search?q=%23100DaysOfCode' target='_blank'><button className='btn btn-sm btn-dark'>#100DaysOfCode</button></a>
              </div>
            </div>

            {/*Add Profile Instructions*/}
            <div className={`row px-4 mt-4 rounded addProfInstructions ${addProfileInst}`}>
              <h3 className='text-secondary mt-3 heading'>How can you add yourself to this list?</h3>
                <div>
                  <h4 className='mb-0 text-secondary'><i className='fa-solid fa-1'></i> Create a student YML</h4>
                  <p className='pl-4'>The student information is stored in <a rel='noopener noreferrer' target='_blank' href='https://www.youtube.com/watch?v=cdLNKUoMc6c'>YML format</a> inside <a href='https://github.com/4GeeksAcademy/About-4Geeks-Academy/tree/master/site/resumes' rel='noopener noreferrer' target='_blank'>this folder</a>, you have to copy the file content and adapt to your own information, use <a href='https://github.com/4GeeksAcademy/About-4Geeks-Academy/blob/master/site/resumes/example.yml' rel='noopener noreferrer' target='_blank'>this YML</a> as an example.</p>
                </div>
                <div>
                <h4 className='mb-0 text-secondary'><i className='fa-solid fa-2'></i> Validate your YML</h4>
                  <p className='pl-4'>Before submiting your YML, validate the content using this tool: <a href='http://www.yamllint.com/' rel='noopener noreferrer' target='_blank'>Yaml Lint</a></p>
                </div>
                <div>
                <h4 className='mb-0 text-secondary'><i className='fa-solid fa-3'></i> Create a Pull Request (PR)</h4>
                  <p className='pl-4'>Fork <a href='https://github.com/4GeeksAcademy/About-4Geeks-Academy'>this repository</a> and create your student file under the resumes folder </p>                
                </div>
                <div>
                <h4 className='mb-0 text-secondary'><i className='fa-solid fa-4'></i> Wait for it!</h4>
                  <p className='pl-4'>It takes a few minutes to complete, you can follow the status on your pull request conversation, you can also check if your commit is showing alreading on the main repository <a target='_blank' rel='noopener noreferrer' href='https://github.com/4GeeksAcademy/student-external-profile/commits/master'>commits history</a> and your pull request should have a ✅ green check on the <a target='_blank' rel='noopener noreferrer' href='https://github.com/4GeeksAcademy/About-4Geeks-Academy/actions?query=workflow%3A%22Testing+for+Errors%22'> repository list of completed actions</a>.</p>                
                </div>
              <button className='btn btn-primary mb-4' onClick={()=>setAddProfileInst('addProfInvis')}>Close these instructions</button>
            </div>

            <div className='row px-5 mt-2 marginFix'>
              <input type='text' className='w-100 form-control mb-3' placeholder='Type student name to search'></input>
            </div>
              <div className='row justify-content-center px-5' id='studentProfContainer'>
                <StudentListing name='Smitty Werbenjaegermanjansen' motto='he was #1' portfolioUrl='http://github.com' linkedIn='steve' gitHub='yancemcfinn'/>
                <StudentListing name='Elongated Muskrat' motto='sdibdsgdsgub' linkedIn='seanmcole' twitter='elonmusk'/>
              </div>
          </div>
      </main>
    );
  }

  function App() {
    return (
      <div>
        <Body />
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));

  // Student Listing Component
  function StudentListing (props){
    
    return (
        <div className='studentRow row p-1 '>
            <div className='col-md-6 float-md-start text-secondary d-inline-block'>
                <p id='studentName'>{props.name}</p>
                <p id='motto'>{props.motto}</p>
            </div>
            <div className='col-md-6 float-md-end d-flex align-items-start justify-content-end py-2'>
                {props.portfolioUrl && props.portfolioUrl != undefined ? <a href={props.portfolioUrl} target='_blank'><button className='btn whiteBtn mx-1'><i className='fa-solid fa-palette'></i> Portfolio</button></a> : null}
                {props.twitter && props.twitter != undefined ? <a href={`https://twitter.com/${props.twitter}`} target='_blank'><button className='btn whiteBtn mx-1'><i className='fa-brands fa-twitter' id='linkBtnIcon'></i></button></a> : null}
                {props.linkedIn && props.linkedIn != undefined ? <a href={`https://linkedin.com/in/${props.linkedIn}`} target='_blank'><button className='btn whiteBtn mx-1'><i className='fa-brands fa-linkedin' id='linkBtnIcon'></i></button></a> : null}
                <button className='btn whiteBtn mx-1'><i className='fa-solid fa-file'></i> HTML</button>
                <button className='btn whiteBtn mx-1'><i className='fa-solid fa-file-pdf'></i> PDF</button>
                {props.gitHub && props.gitHub != undefined ? <a href={`https://github.com/${props.gitHub}`} target='_blank'><button className='btn whiteBtn mx-1'><i className='fa-brands fa-github' id='linkBtnIcon'></i></button></a> : null}
            </div>
        </div>
    )
}

// StudentListing.propTypes = {
//   name: PropTypes.string,
//   motto: PropTypes.string,
//   portfolioUrl: PropTypes.string,
//   twitter: PropTypes.string,
//   linkedIn: PropTypes.string,
//   gitHub: PropTypes.string
// }