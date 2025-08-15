"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Share2, Download } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from a database or CMS
const resources = {
  "electoral-reform-letter": {
    type: "Public Letter",
    title: "Open Letter to the National Assembly on Electoral Reform",
    date: "December 15, 2024",
    author: "Vanguard For Democracy In Nigeria",
    category: "Policy Advocacy",
    content: `
      <p>Honorable Members of the National Assembly,</p>
      
      <p>We write to you today as concerned citizens and advocates for democratic governance in Nigeria. The foundation of our democracy rests on the integrity of our electoral processes, and we believe the time has come for comprehensive electoral reforms that will strengthen the very bedrock of our nation's democratic institutions.</p>
      
      <h2>The Current State of Our Electoral System</h2>
      
      <p>While Nigeria has made significant strides in democratic governance since 1999, our electoral system continues to face challenges that undermine public confidence and citizen participation. These challenges include:</p>
      
      <ul>
        <li>Inadequate voter education and civic awareness programs</li>
        <li>Limited transparency in campaign financing</li>
        <li>Insufficient protection for electoral officials and observers</li>
        <li>Gaps in the legal framework governing electoral disputes</li>
        <li>Technology integration challenges in the electoral process</li>
      </ul>
      
      <h2>Our Recommendations</h2>
      
      <p>We respectfully submit the following recommendations for your consideration:</p>
      
      <h3>1. Strengthen Electoral Legal Framework</h3>
      <p>We call for amendments to the Electoral Act that will provide clearer guidelines for electoral processes, enhance penalties for electoral offenses, and establish more robust mechanisms for dispute resolution.</p>
      
      <h3>2. Enhance Transparency in Campaign Financing</h3>
      <p>Implement comprehensive campaign finance regulations that require full disclosure of funding sources, establish spending limits, and create effective monitoring mechanisms.</p>
      
      <h3>3. Invest in Civic Education</h3>
      <p>Allocate adequate resources for nationwide civic education programs that will empower citizens with knowledge about their rights, responsibilities, and the electoral process.</p>
      
      <h3>4. Protect Electoral Stakeholders</h3>
      <p>Establish stronger legal protections for electoral officials, observers, and journalists covering elections, ensuring they can perform their duties without fear of intimidation or violence.</p>
      
      <h2>The Path Forward</h2>
      
      <p>Democracy is not a destination but a journey that requires constant nurturing and improvement. We believe that with your leadership and commitment, Nigeria can build an electoral system that truly reflects the will of the people and serves as a model for democratic governance across Africa.</p>
      
      <p>We stand ready to work with you in this noble endeavor and look forward to your positive response to these recommendations.</p>
      
      <p>Respectfully submitted,<br/>
      <strong>Vanguard For Democracy In Nigeria</strong></p>
    `,
  },
  "civic-education-foundation": {
    type: "Blog Post",
    title: "Civic Education: The Foundation of Democratic Participation",
    date: "December 10, 2024",
    author: "VFDN Research Team",
    category: "Civic Education",
    content: `
      <p>In the heart of every thriving democracy lies an informed and engaged citizenry. Civic education serves as the cornerstone that transforms ordinary citizens into active participants in the democratic process, empowering them with the knowledge, skills, and values necessary to contribute meaningfully to their society.</p>
      
      <h2>What is Civic Education?</h2>
      
      <p>Civic education encompasses the knowledge and understanding of how government works, the rights and responsibilities of citizenship, and the skills needed to participate effectively in civic life. It goes beyond mere knowledge of political structures to include the development of critical thinking skills, ethical reasoning, and a commitment to democratic values.</p>
      
      <h2>The Nigerian Context</h2>
      
      <p>In Nigeria, civic education takes on particular significance given our diverse population, complex federal structure, and ongoing democratic development. Our citizens need to understand not just their rights, but also how to exercise them effectively within our unique political and cultural context.</p>
      
      <h3>Key Areas of Focus</h3>
      
      <ul>
        <li><strong>Constitutional Literacy:</strong> Understanding the Nigerian Constitution, fundamental rights, and the structure of government</li>
        <li><strong>Electoral Processes:</strong> Knowledge of how elections work, voter registration, and the importance of participation</li>
        <li><strong>Rule of Law:</strong> Understanding legal processes, access to justice, and the role of law enforcement</li>
        <li><strong>Civic Engagement:</strong> Ways to participate in community development and hold leaders accountable</li>
        <li><strong>Digital Citizenship:</strong> Responsible use of technology and social media in civic participation</li>
      </ul>
      
      <h2>The Impact of Civic Education</h2>
      
      <p>Research consistently shows that civic education leads to:</p>
      
      <ul>
        <li>Increased voter turnout and political participation</li>
        <li>Greater tolerance for diverse viewpoints</li>
        <li>Improved ability to evaluate political information critically</li>
        <li>Enhanced community engagement and volunteerism</li>
        <li>Stronger support for democratic institutions and processes</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      
      <p>While Nigeria has made progress in civic education, challenges remain:</p>
      
      <h3>Challenges:</h3>
      <ul>
        <li>Limited resources for comprehensive civic education programs</li>
        <li>Varying levels of literacy and access to information</li>
        <li>Political polarization affecting objective civic discourse</li>
        <li>Rapid technological changes requiring new forms of digital literacy</li>
      </ul>
      
      <h3>Opportunities:</h3>
      <ul>
        <li>Growing youth population eager for civic engagement</li>
        <li>Increased access to information through digital platforms</li>
        <li>Strong civil society organizations committed to civic education</li>
        <li>Government recognition of the importance of civic education</li>
      </ul>
      
      <h2>Our Role in Civic Education</h2>
      
      <p>At Vanguard For Democracy In Nigeria, we believe that civic education is not just the responsibility of schools or government—it's a collective effort that requires the participation of all stakeholders in society.</p>
      
      <p>We are committed to:</p>
      
      <ul>
        <li>Developing accessible civic education materials for all age groups</li>
        <li>Organizing community workshops and seminars</li>
        <li>Leveraging technology to reach wider audiences</li>
        <li>Partnering with schools, universities, and community organizations</li>
        <li>Advocating for the integration of civic education in formal curricula</li>
      </ul>
      
      <h2>Getting Involved</h2>
      
      <p>Civic education is most effective when it's participatory and relevant to people's daily lives. We encourage all Nigerians to:</p>
      
      <ul>
        <li>Stay informed about local and national issues</li>
        <li>Participate in community meetings and public forums</li>
        <li>Engage respectfully with those who hold different viewpoints</li>
        <li>Share accurate information and combat misinformation</li>
        <li>Mentor young people in civic engagement</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The strength of our democracy depends on the civic knowledge and engagement of our citizens. By investing in comprehensive civic education, we invest in the future of our nation. Every informed citizen is a guardian of democracy, and every act of civic participation strengthens the foundation upon which our society stands.</p>
      
      <p>Together, we can build a Nigeria where every citizen is empowered to participate meaningfully in the democratic process, where diverse voices are heard and respected, and where the promise of democracy is fulfilled for all.</p>
    `,
  },
  "transparency-blueprint": {
    type: "Position Paper",
    title: "Transparency in Governance: A Blueprint for Accountability",
    date: "December 5, 2024",
    author: "VFDN Policy Research Unit",
    category: "Transparency",
    content: `
      <h1>Executive Summary</h1>
      
      <p>Transparency in governance is fundamental to democratic accountability and public trust. This position paper presents a comprehensive analysis of the current state of transparency in Nigerian governance and provides actionable recommendations for improvement. Our research identifies key gaps in information disclosure, public participation, and accountability mechanisms, while proposing practical solutions that can be implemented at federal, state, and local levels.</p>
      
      <h2>Introduction</h2>
      
      <p>Transparency in governance refers to the openness, communication, and accountability of government institutions and officials to the public. It encompasses the right of citizens to access information about government decisions, processes, and expenditures, as well as the obligation of government to proactively share relevant information with the public.</p>
      
      <h2>Current State of Transparency in Nigeria</h2>
      
      <h3>Legal Framework</h3>
      
      <p>Nigeria has made significant strides in establishing a legal framework for transparency:</p>
      
      <ul>
        <li><strong>Freedom of Information Act (2011):</strong> Provides legal basis for access to public information</li>
        <li><strong>Fiscal Responsibility Act (2007):</strong> Mandates transparency in public financial management</li>
        <li><strong>Public Procurement Act (2007):</strong> Requires transparency in government contracting</li>
        <li><strong>Constitution (1999):</strong> Guarantees freedom of expression and access to information</li>
      </ul>
      
      <h3>Implementation Challenges</h3>
      
      <p>Despite the legal framework, implementation remains challenging:</p>
      
      <ul>
        <li>Limited awareness of transparency laws among citizens and officials</li>
        <li>Inadequate enforcement mechanisms</li>
        <li>Resistance to information disclosure by some government agencies</li>
        <li>Limited resources for transparency initiatives</li>
        <li>Weak institutional capacity for information management</li>
      </ul>
      
      <h2>Key Areas for Improvement</h2>
      
      <h3>1. Budget Transparency</h3>
      
      <p><strong>Current Challenges:</strong></p>
      <ul>
        <li>Complex budget documents that are difficult for citizens to understand</li>
        <li>Limited public participation in budget processes</li>
        <li>Inadequate reporting on budget execution</li>
        <li>Weak oversight of budget implementation</li>
      </ul>
      
      <p><strong>Recommendations:</strong></p>
      <ul>
        <li>Publish citizen-friendly budget summaries</li>
        <li>Establish participatory budgeting mechanisms</li>
        <li>Implement real-time budget tracking systems</li>
        <li>Strengthen legislative oversight of budget execution</li>
      </ul>
      
      <h3>2. Procurement Transparency</h3>
      
      <p><strong>Current Challenges:</strong></p>
      <ul>
        <li>Limited public access to procurement information</li>
        <li>Weak competition in government contracting</li>
        <li>Inadequate monitoring of contract execution</li>
        <li>Limited citizen participation in procurement oversight</li>
      </ul>
      
      <p><strong>Recommendations:</strong></p>
      <ul>
        <li>Establish online procurement portals with comprehensive information</li>
        <li>Implement open contracting standards</li>
        <li>Create citizen monitoring mechanisms for major contracts</li>
        <li>Strengthen procurement oversight institutions</li>
      </ul>
      
      <h3>3. Decision-Making Transparency</h3>
      
      <p><strong>Current Challenges:</strong></p>
      <ul>
        <li>Limited public consultation on policy decisions</li>
        <li>Inadequate communication of government decisions</li>
        <li>Weak feedback mechanisms for citizen input</li>
        <li>Limited access to decision-making processes</li>
      </ul>
      
      <p><strong>Recommendations:</strong></p>
      <ul>
        <li>Establish mandatory public consultation requirements</li>
        <li>Create accessible platforms for citizen engagement</li>
        <li>Implement proactive information disclosure policies</li>
        <li>Strengthen feedback and response mechanisms</li>
      </ul>
      
      <h2>Technology and Transparency</h2>
      
      <p>Digital technology offers unprecedented opportunities to enhance transparency:</p>
      
      <h3>Digital Platforms</h3>
      <ul>
        <li>Government websites with comprehensive information</li>
        <li>Mobile applications for citizen services</li>
        <li>Social media for government communication</li>
        <li>Online portals for information requests</li>
      </ul>
      
      <h3>Data Management</h3>
      <ul>
        <li>Open data initiatives</li>
        <li>Standardized data formats</li>
        <li>Real-time data publication</li>
        <li>Data visualization tools</li>
      </ul>
      
      <h2>Implementation Strategy</h2>
      
      <h3>Phase 1: Foundation Building (Months 1-6)</h3>
      <ul>
        <li>Conduct transparency assessments across government agencies</li>
        <li>Develop transparency action plans</li>
        <li>Build institutional capacity for transparency</li>
        <li>Launch public awareness campaigns</li>
      </ul>
      
      <h3>Phase 2: System Development (Months 7-18)</h3>
      <ul>
        <li>Implement digital transparency platforms</li>
        <li>Establish information disclosure procedures</li>
        <li>Create citizen engagement mechanisms</li>
        <li>Develop monitoring and evaluation systems</li>
      </ul>
      
      <h3>Phase 3: Full Implementation (Months 19-36)</h3>
      <ul>
        <li>Roll out comprehensive transparency measures</li>
        <li>Strengthen oversight and accountability mechanisms</li>
        <li>Expand citizen participation opportunities</li>
        <li>Conduct regular transparency assessments</li>
      </ul>
      
      <h2>Measuring Success</h2>
      
      <p>Success in transparency initiatives should be measured through:</p>
      
      <ul>
        <li><strong>Quantitative Indicators:</strong> Number of information requests processed, government websites with updated information, citizen participation rates</li>
        <li><strong>Qualitative Indicators:</strong> Quality of information disclosed, citizen satisfaction with transparency, media coverage of government transparency</li>
        <li><strong>Impact Indicators:</strong> Reduced corruption, increased public trust, improved service delivery</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Transparency in governance is not just a democratic ideal—it is a practical necessity for effective governance and sustainable development. By implementing the recommendations outlined in this blueprint, Nigeria can build a more transparent, accountable, and responsive government that serves the interests of all citizens.</p>
      
      <p>The journey toward full transparency requires commitment from government, active participation from citizens, and support from civil society organizations. Together, we can create a governance system that is truly of the people, by the people, and for the people.</p>
      
      <h2>Call to Action</h2>
      
      <p>We call upon:</p>
      
      <ul>
        <li><strong>Government:</strong> To commit to implementing these transparency measures</li>
        <li><strong>Citizens:</strong> To actively demand and utilize transparent governance</li>
        <li><strong>Civil Society:</strong> To monitor and support transparency initiatives</li>
        <li><strong>Media:</strong> To report on transparency issues and hold government accountable</li>
        <li><strong>Private Sector:</strong> To support transparency through technology and resources</li>
      </ul>
      
      <p>Together, we can build a Nigeria where transparency is not just an aspiration, but a reality that benefits all citizens.</p>
    `,
  },
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = resources[params.slug as keyof typeof resources]

  if (!resource) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline" className="text-sm">
                {resource.type}
              </Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{resource.category}</Badge>
            </div>

            <h1 className="font-heading font-black text-3xl md:text-5xl mb-6">{resource.title}</h1>

            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{resource.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{resource.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-ul:space-y-2 prose-li:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: resource.content }}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading font-bold text-2xl mb-4">Join the Conversation</h3>
            <p className="text-muted-foreground mb-6">
              Have thoughts on this {resource.type.toLowerCase()}? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90">Share Your Thoughts</Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
