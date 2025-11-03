export default function Home() {
  return (
    <main className="bg-dark text-light min-vh-100">
      {/* HERO SECTION */}
      <section className="d-flex flex-column justify-content-center align-items-center text-center py-5" style={{ minHeight: "100vh" }}>
        <h1 className="fw-bold display-4 mb-3 text-white">Hi, I&apos;m Valdo 👋</h1>
        <p className="lead text-white-50 mb-4">
          Web Developer | Next.js & Bootstrap Enthusiast
        </p>
        <a href="#about" className="btn btn-primary btn-lg px-4 shadow">
          View My Work
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-5 border-top text-center">
        <div className="container">
          <h2 className="fw-bold mb-4 text-white">About Me</h2>
          <p className="col-md-8 mx-auto text-white-50 fs-5">
            I’m a passionate web developer focusing on creating modern, responsive,
            and user-friendly websites. I enjoy learning new technologies like
            Next.js and integrating them with Bootstrap to build clean and elegant
            designs.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-5 bg-gradient text-center">
        <div className="container">
          <h2 className="fw-bold mb-4 text-white">Skills</h2>
          <div className="row justify-content-center">
            {["HTML / CSS / JS", "Bootstrap", "Next.js", "Git / Github"].map(
              (skill, i) => (
                <div key={i} className="col-6 col-md-3 mb-3">
                  <div className="card bg-transparent border border-light text-light shadow-sm h-100">
                    <div className="card-body d-flex justify-content-center align-items-center">
                      <h5 className="m-0">{skill}</h5>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-4 border-top text-white-50">
        © 2025 Valdo Portfolio
      </footer>
    </main>
  );
}
