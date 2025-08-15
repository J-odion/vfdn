"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { motion } from "framer-motion"

const resources = [
  {
    slug: "electoral-reform-letter",
    type: "Public Letter",
    title: "Open Letter to the National Assembly on Electoral Reform",
    excerpt:
      "We call upon our representatives to prioritize comprehensive electoral reforms that will strengthen the foundation of our democracy...",
    date: "December 15, 2024",
    category: "Policy Advocacy",
  },
  {
    slug: "civic-education-foundation",
    type: "Blog Post",
    title: "Civic Education: The Foundation of Democratic Participation",
    excerpt:
      "Understanding your rights and responsibilities as a citizen is the first step toward meaningful democratic engagement...",
    date: "December 10, 2024",
    category: "Civic Education",
  },
  {
    slug: "transparency-blueprint",
    type: "Position Paper",
    title: "Transparency in Governance: A Blueprint for Accountability",
    excerpt:
      "Our comprehensive analysis of current transparency gaps and actionable recommendations for improvement...",
    date: "December 5, 2024",
    category: "Transparency",
  },
]

export default function ResourcesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-heading font-black text-xl">Vanguard For Democracy</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/#about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/#get-involved" className="text-foreground hover:text-primary transition-colors">
                Get Involved
              </Link>
              <Button className="bg-accent hover:bg-accent/90">Donate Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl mb-6">Our Voice, Our Stand</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Read our latest public letters, advocacy posts, and insights on democracy in Nigeria.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search resources..." className="pl-10 border-primary/20 focus:border-primary" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {resources.map((resource, index) => (
              <motion.div key={resource.slug} variants={fadeInUp}>
                <Link href={`/resources/${resource.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {resource.date}
                        </div>
                      </div>
                      <CardTitle className="font-heading font-bold text-lg group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{resource.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{resource.category}</Badge>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          Read More <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading font-black text-3xl mb-6">Stay Informed, Stay Engaged</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest updates on our advocacy work and democratic initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email" className="border-primary/20 focus:border-primary" />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
