import './Blog.css';

export default function Blog() {
    return (
        <main>
            <h1>Blog</h1>
            <div className="blog-container">
                <div className="content-text">
                    <h1 className='content-heading'>
                        Pet Welfare<br/> Guides
                    </h1>
                    <div className="form-row">
                        {/* First form container */}
                        <div className="form-container">
                            {/* Content for the first form container */}
                            <p>Form content 1</p>
                        </div>
                        {/* Second form container */}
                        <div className="form-container">
                            {/* Content for the second form container */}
                            <p>Form content 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
