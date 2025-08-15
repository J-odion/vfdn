"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { JoinMovementModal } from "@/components/join-movement-modal"
import { ArrowRight, Users, Shield, BookOpen, Eye, Heart, Scale, Megaphone, FileText, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
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
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-heading font-black text-xl">Vanguard For Democracy</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#initiatives" className="text-foreground hover:text-primary transition-colors">
                Our Work
              </a>
              <Link href="/resources" className="text-foreground hover:text-primary transition-colors">
                Resources
              </Link>
              <a href="#get-involved" className="text-foreground hover:text-primary transition-colors">
                Get Involved
              </a>
              <Button className="bg-accent hover:bg-accent/90">Donate Now</Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="font-heading font-black text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Championing True Democracy, One Voice at a Time
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              Building a Nigeria where freedom, justice, and the people's will are not just ideals, but reality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <JoinMovementModal />
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="font-heading font-black text-3xl md:text-5xl mb-6">About Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vanguard For Democracy In Nigeria is a civic movement dedicated to strengthening democratic institutions,
              promoting transparency, and empowering citizens to take an active role in governance. We believe democracy
              thrives when citizens are informed, engaged, and fearless in demanding accountability from those in power.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: BookOpen,
                title: "Civic Education",
                desc: "Equipping Nigerians with knowledge to protect and participate in democracy",
              },
              {
                icon: Megaphone,
                title: "Advocacy & Policy",
                desc: "Driving reforms that reflect the will and welfare of the people",
              },
              {
                icon: Users,
                title: "Community Mobilization",
                desc: "Inspiring grassroots action across all regions of Nigeria",
              },
              {
                icon: Eye,
                title: "Accountability Watch",
                desc: "Monitoring governance to ensure promises are met and corruption is challenged",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
                  <CardHeader className="text-center">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="font-heading font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-heading font-black text-3xl md:text-5xl mb-6">Why We Exist</h2>
              <p className="text-lg leading-relaxed">
                Nigeria's democracy is a promise worth fighting for—but it faces challenges: voter apathy, corruption,
                intimidation, and misinformation. We rise to meet these challenges head-on, standing shoulder to
                shoulder with every Nigerian who believes our nation can—and must—be better.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border-l-4 border-l-accent"
            >
              <h3 className="font-heading font-bold text-2xl mb-4 flex items-center">
                <Heart className="h-6 w-6 text-accent mr-2" />
                Our Vision
              </h3>
              <p className="text-lg font-medium">
                A democratic Nigeria where every voice counts, every vote matters, and leadership serves the people with
                integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Public Content Section */}
      <section id="content" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="font-heading font-black text-3xl md:text-5xl mb-6">Our Voice, Our Stand</h2>
            <p className="text-xl text-muted-foreground mb-4">
              Read our latest public letters, advocacy posts, and insights on democracy in Nigeria.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
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
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={`/resources/${item.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <CardTitle className="font-heading font-bold text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{item.category}</Badge>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="/resources">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <FileText className="h-5 w-5 mr-2" />
                View All Publications
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="font-heading font-black text-3xl md:text-5xl mb-6">Get Involved</h2>
            <p className="text-xl text-muted-foreground mb-4">Your voice is your power—use it.</p>
            <p className="text-lg text-muted-foreground">
              Join our network of citizens, advocates, journalists, and policy shapers committed to securing a truly
              democratic future for Nigeria.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Users, title: "Volunteer", desc: "Volunteer your time", color: "primary" },
              { icon: Scale, title: "Partner", desc: "Partner with us on initiatives", color: "accent" },
              { icon: Heart, title: "Support", desc: "Support our advocacy financially", color: "primary" },
              { icon: BookOpen, title: "Stay Informed", desc: "Newsletter and action alerts", color: "accent" },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardHeader className="text-center">
                    <item.icon
                      className={`h-12 w-12 mx-auto mb-4 ${item.color === "primary" ? "text-primary" : "text-accent"} group-hover:scale-110 transition-transform`}
                    />
                    <CardTitle className="font-heading font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-lg text-white">
              <h3 className="font-heading font-black text-2xl md:text-3xl mb-4">Democracy only works when we do.</h3>
              <p className="text-lg mb-6 opacity-90">
                Take your stand today—because the Nigeria we want tomorrow begins with the actions we take now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <JoinMovementModal />
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Donate Now <Heart className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-heading font-black text-xl">Vanguard For Democracy In Nigeria</span>
            </div>
            <div className="flex items-center space-x-6">
              <Badge variant="outline" className="border-primary text-primary">
                Championing Democracy
              </Badge>
              <p className="text-sm opacity-75">© 2024 Vanguard For Democracy In Nigeria</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
