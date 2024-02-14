import React from 'react';
import './BlogGrid.css';

const BlogGrid: React.FC = () => {
  return (
    <section id="blog-grid" className="blog-grid">
        <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/* Main blog content */}
          <h2>Unleashing the Power of React Scripts: Streamlining Your Development Workflow</h2>
          <p>
            React Scripts is a versatile tool that simplifies the process of creating and managing React applications. Whether you're a seasoned developer or just starting out, this guide will unlock its potential and supercharge your workflow.
          </p>

          <h3>Getting Started with Ease</h3>
          <ul>
            <li>Effortless Setup: <code>npx create-react-app my-app</code> sets you up with everything you need.</li>
            <li>Command Central: Use the `react-scripts` script for development, building, testing, and more.</li>
          </ul>

          <h3>Boosting Productivity</h3>
          <ul>
            <li>Hot Reloading: See changes instantly reflected in your browser.</li>
            <li>Automatic Linting: Enforce code style and catch potential errors early.</li>
            <li>Integrated Webpack: Benefit from Webpack's power without manual configuration.</li>
            <li>Test Suite Ready: Start writing tests out-of-the-box with Jest.</li>
          </ul>

          {/* Add more content sections as needed */}
        </div>
        <div className="col-md-4">
          {/* Sidebar content */}
          <h3>Tailoring the Experience</h3>
          <p>Manage environment variables, leverage custom configurations, and expand functionality with add-ons.</p>

          <h3>Going Beyond the Basics</h3>
          <p>Explore TypeScript support and discover a wide range of community-built add-ons.</p>

          <h3>Embrace the Efficiency</h3>
          <p>Focus on writing amazing code and building innovative applications by using React Scripts effectively.</p>

          <p>Ready to explore further? Share your specific challenges or questions in the comments!</p>

          <a href="https://create-react-app.dev/" target="_blank" rel="noreferrer">Official React Scripts Documentation</a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;