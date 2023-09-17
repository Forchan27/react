import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"></img>
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://img.freepik.com/premium-photo/sunny-beach-in-paradise-with-white-sand-coconut-palms-and-a-blue-water-concept-of-summertime-fun-and-relaxation-on-a-tropical-beach_410516-19004.jpg"></img>
        </div>
        <div>
          {/* <img src="https://secretmag.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2023/02/09/16/5789107/06fae590f1d8cd395cd92a660ab510aa019e6399.jpg"></img> */}
          ava + descriotion
        </div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
