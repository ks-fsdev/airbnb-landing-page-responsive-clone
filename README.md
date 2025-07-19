<h1>🏠 Airbnb Clone — Responsive Landing Page</h1>

<p>
  This is a front-end clone of the Airbnb landing page built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.
  The goal of this project was to practice layout replication, polish my understanding of the <strong>box model</strong>, create a <strong>responsive UI</strong>, and implement dynamic behavior using <strong>DOM manipulation</strong>.
</p>

<hr />

<h2>🔗 Live Demo</h2>
<p>
  <a href="https://ks-fsdev.github.io/airbnb-landing-page-responsive-clone/" target="_blank">
    View Live Project
  </a>
  <br />
  ⚠️ <em>Note: Some browsers (like Chrome) may show a security warning. This is just a personal project hosted via GitHub Pages and is completely safe.</em>
</p>

<hr />

<h2>🧠 What I Practiced</h2>
<ul>
  <li>Recreating a complex landing page layout from scratch</li>
  <li>Advanced CSS Box Model understanding</li>
  <li>Responsive Design for Desktop, Tablet, and Mobile</li>
  <li>Building a dynamic header that adapts across screen sizes</li>
  <li>DOM manipulation using JavaScript (scroll-based button animation)</li>
</ul>

<hr />

<h2>⚙️ Feature Highlight</h2>
<p>
  One feature includes a button that dynamically disappears or appears based on scroll position, using JavaScript:
</p>

<pre><code>
window.addEventListener("scroll", function () {
  var tarPos = btnHideSeek.getBoundingClientRect().top;

  if (tarPos &lt; window.innerHeight &amp;&amp; tarPos &gt; 0) {
    showMapBtn.classList.add("disappear");
    showMapBtn.classList.remove("appear");
  } else {
    showMapBtn.classList.remove("disappear");
    showMapBtn.classList.add("appear");
  }
});
</code></pre>

<p>This added interactivity and polish to the UI.</p>

<hr />

<h2>📁 Folder & File Structure</h2>

<table>
  <thead>
    <tr>
      <th>File/Folder</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>index.html</code></td>
      <td>Main structure of the landing page</td>
    </tr>
    <tr>
      <td><code>style.css</code></td>
      <td>All layout, responsiveness, and visual styling</td>
    </tr>
    <tr>
      <td><code>script.js</code></td>
      <td>JavaScript functionality like scroll detection</td>
    </tr>
    <tr>
      <td><code>images/</code></td>
      <td>All visual assets (hero images, UI images)</td>
    </tr>
    <tr>
      <td><code>svg/</code></td>
      <td>SVG icons used throughout the layout</td>
    </tr>
    <tr>
      <td><code>ss/</code></td>
      <td>Screen recording GIFs for showcasing the project</td>
    </tr>
  </tbody>
</table>

<hr />

<h2>📸 Demo Previews</h2>

<p><strong>Desktop View</strong></p>
<img src="ss/landing-page.gif" alt="Desktop View" width="500" />

<p><strong>Responsive Design</strong></p>
<img src="ss/responsive-design.gif" alt="Responsive Design" width="500" />

<p><strong>Tab View</strong></p>
<img src="ss/tab-view.gif" alt="Mobile View" width="300" />

<p><strong>Mobile View</strong></p>
<img src="ss/mobile view.gif" alt="Mobile View" width="300" />

<hr />

<h2>🛠️ Technologies Used</h2>
<ul>
  <li>HTML5</li>
  <li>CSS3 (Responsive Design, Flexbox, Media Queries)</li>
  <li>JavaScript (Vanilla JS, DOM methods, scroll detection)</li>
</ul>

<hr />

<h2>About Me</h2>
<p>
  I built this project to sharpen my layout skills by replicating a real-world product. It helped me better understand responsiveness, JavaScript-based UI logic, and how to structure front-end code in a professional way.
</p>
