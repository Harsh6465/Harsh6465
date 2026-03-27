import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCards";

// Using distinct contextual images for the AI blog cards
const ragImg   = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop";
const agentImg = "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const multiImg = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading reveal-left">
          My <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }} className="reveal">
          Here are a few technical articles and thoughts I've shared recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="blog-card reveal">
            <BlogCard
              imgPath={ragImg}
              title="A Complete Guide to RAG Architectures"
              description="Learn how Retrieval-Augmented Generation (RAG) prevents LLM hallucinations by combining authoritative data retrieval with generative language models."
              link="https://www.ibm.com/topics/retrieval-augmented-generation"
            />
          </Col>

          <Col md={4} className="blog-card reveal">
            <BlogCard
              imgPath={agentImg}
              title="Building Autonomous AI Agents"
              description="Explore how frameworks like LangChain and AutoGen are enabling developers to build self-prompting AI agents that can utilize tools and plan complex tasks."
              link="https://www.analyticsvidhya.com/blog/2023/12/autonomous-ai-agents/"
            />
          </Col>

          <Col md={4} className="blog-card reveal">
            <BlogCard
              imgPath={multiImg}
              title="The Era of Multimodal LLMs"
              description="Understand how the next generation of LLMs processes text, vision, and audio simultaneously to unlock massive leaps in machine understanding."
              link="https://www.datacamp.com/blog/what-are-multimodal-models"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
