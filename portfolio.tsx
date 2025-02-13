"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@/components/ui/timeline"
import Link from "next/link"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C", "C++", "HTML", "CSS"],
    "Frameworks/Libraries": [
      "React",
      "Node.js",
      "Express.js",
      "Spring",
      "Spring Boot",
      "Flask",
      "Dash",
      "pandas",
      "Matplotlib",
    ],
    "Databases/Tools": ["MySQL", "MongoDB", "AWS", "Git", "Linux", "Postman", "GraphQL", "Jenkins", "Docker"],
  }

  const experiences = [
    {
      title: "Graduate Assistant - Software Development",
      company: "George Mason University",
      location: "Fairfax, Virginia",
      period: "August 2023 - present",
      logo: "/GMU.svg?height=50&width=50",
    },
    {
      title: "Software Engineering Intern",
      company: "Fairfax County Government via George Mason University",
      location: "Fairfax, Virginia",
      period: "May 2024 - August 2024",
      logo: "/ffx.png?height=50&width=50",
    },
    {
      title: "Software Engineer - Full-time",
      company: "Shell",
      location: "Bengaluru, India",
      period: "September 2020 - December 2022",
      logo: "/Shell.webp?height=50&width=50",
    },
    {
      title: "Full-Stack Developer Volunteer",
      company: "West Agile Labs",
      location: "Remote",
      period: "August 2019 - August 2020",
      logo: "/placeholder.svg?height=50&width=50",
    },
    {
      title: "Software Engineering Intern",
      company: "Shell",
      location: "Bengaluru, India",
      period: "June 2019 - August 2019",
      logo: "/Shell.webp?height=50&width=50",
    },
    {
      title: "IT Application Developer Volunteer",
      company: "Square Off",
      location: "Remote",
      period: "August 2018 - May 2019",
      logo: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">Shreyas Kaup</div>
            <div className="hidden md:flex space-x-4">
              {["home", "skills", "experience", "projects", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-gray-600 hover:text-gray-900 ${activeSection === item ? "font-bold" : ""}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Shreyas Kaup</h1>
            <p className="text-xl mb-8">Software Engineer | AWS Certified Developer</p>
            <Button onClick={() => scrollToSection("contact")}>Get in Touch</Button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-4">
              I'm a passionate software engineer with experience in full-stack development, cloud technologies, and data
              analysis. My expertise spans across various programming languages and frameworks, allowing me to tackle
              diverse challenges in software development.
            </p>
            <p className="text-lg">
              With a strong foundation in computer science and hands-on experience in building scalable applications,
              I'm always eager to learn and apply new technologies to solve complex problems.
            </p>
          </div>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    {skillList.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                {index < experiences.length - 1 && <TimelineConnector />}
                <TimelineHeader>
                  <TimelineIcon>
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={exp.company}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </TimelineIcon>
                  <h3 className="text-lg font-semibold ml-4">{exp.title}</h3>
                </TimelineHeader>
                <TimelineBody>
                  <div className="ml-16">
                    <p>{exp.company}</p>
                    <p>{exp.location}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                </TimelineBody>
              </TimelineItem>
            ))}
          </Timeline>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Libraverse",
                description: "Book Management Application",
                image: "/libra.jpg?height=150&width=300",
                url: "https://github.com/shreyas117/LibraVerse",
                content:
                  "A full-stack book management application using Spring Boot and React. Features include a dynamic homepage, efficient search, and a cart system.",
              },
              {
                title: "Food Ordering App",
                description: "React and Node.js Application",
                image: "/food.webp?height=150&width=300",
                url: "https://github.com/shreyas117/Restaurants",
                content:
                  "Built using React and Node.js with MongoDB. Migrated backend to AWS serverless with API Gateway, Lambda, and DynamoDB for improved scalability.",
              },
              {
                title: "University Department Website",
                description: "DevOps Application",
                image: "/devops.svg?height=150&width=300",
                url: "https://github.com/shreyas117/SWE-645-Assignment",
                content:
                  "A cloud-based web application developed using Docker, AWS EC2, Rancher for Kubernetes management, and Jenkins for CI/CD automation. The project demonstrates expertise in setting up and managing cloud infrastructure, containerization, and automating deployment pipelines, showcasing a comprehensive approach to scalable and efficient application deployment.",
              },
              {
                title: "Freaking Fit: Fitness App",
                description: "Personalized Fitness Application",
                image: "/fit.webp?height=150&width=300",
                url: "https://github.com/shreyas117/Freaking-Fit",
                content:
                  "Engineered an interactive fitness tracking application that empowers users to create personalized gym routines and diet plans, enhancing their fitness journey through tailored workout and nutrition guidance.",
              },
              {
                title: "Thoughtcode",
                description: "Programming Learning Platform",
                image: "/elearn.png?height=150&width=300",
                url: "https://github.com/shreyas117/Thoughtcode",
                content:
                  "A Web application where users can learn programming concepts. The users are assessed regularly through quizzes, and their course progress updated dynamically as they progress through the learning course. (Using Flask Framework and SQLite DBMS Library)",
              },
            ].map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={150}
                    className="mb-4 rounded-lg w-full object-cover"
                  />
                  <p className="text-sm">{project.content}</p>
                </CardContent>
                <CardFooter>
                  <Link href={project.url} passHref>
                  <Button variant="outline" size="sm">
                    View Project
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="education" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            {[
              {
                name: "George Mason University",
                degree: "Master of Science, Computer Science",
                gpa: "GPA: 3.83/4.0",
                period: "January 2023 - December 2024",
                logo: "/GMU.svg?height=80&width=80",
              },
              {
                name: "The National Institute of Engineering",
                degree: "Bachelor of Science, Computer Science",
                gpa: "GPA: 3.96/4.0",
                period: "August 2016 - May 2020",
                logo: "/NIE.png?height=80&width=80",
              },
            ].map((edu, index) => (
              <div key={index} className="flex items-center space-x-6">
                <Image
                  src={edu.logo || "/placeholder.svg"}
                  alt={edu.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">{edu.name}</h3>
                  <p>{edu.degree}</p>
                  <p>{edu.gpa}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
  <div className="grid md:grid-cols-2 gap-8 justify-center">
    <Card className="flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle>My details: </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Email: shreyaskv222@gmail.com</p>
        <p>Phone: +1 (571)-651-1856</p>
        <p>Location: Arlington, VA</p>
        <div className="flex space-x-4 justify-center">
          <Button variant="outline">LinkedIn</Button>
          <Button variant="outline">GitHub</Button>
        </div>
      </CardContent>
    </Card>
    <Card>

        {/* <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Email: shreyaskv222@gmail.com</p>
                <p>Phone: +1 (571)-651-1856</p>
                <p>Location: Arlington, VA</p>
                <div className="flex space-x-4">
                  <Button variant="outline">LinkedIn</Button>
                  <Button variant="outline">GitHub</Button>
                </div>
              </CardContent>
            </Card>
            <Card> */}
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Fill out the form below to send me a message.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message here..." />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

