App.jsx// App.jsx
const data = {
  "images": {
    "logo": "https://cdn.example.com/logo.png",
    "background": "https://cdn.example.com/bg.jpg"
  },
  "videos": {
    "intro": "https://cdn.example.com/intro.mp4"
  }
};

function App() {
  return (
    <div style={{ backgroundImage: `url(${data.images.background})` }}>
      <img src={data.images.logo} alt="Logo" />
      <h1>مرحباً بك في مشروعي</h1>
      
      <video width="600" controls>
        <source src={data.videos.intro} type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>
      
      <br />
      <a href={data.documents.manual} target="_blank">تحميل الدليل (PDF)</a>
    </div>
  );
}

export default App;