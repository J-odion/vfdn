"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Users, Mail, ArrowRight } from "lucide-react"

export function JoinMovementModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
          Join The Movement <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading font-black text-2xl md:text-3xl text-center mb-4">
            Join The Movement
          </DialogTitle>
          <p className="text-lg text-muted-foreground text-center">
            Ready to be part of the change? Fill out the form below and we'll connect you with opportunities to make a
            difference.
          </p>
        </DialogHeader>

        <form className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium">
              First Name *
            </Label>
            <Input
              id="firstName"
              placeholder="Enter your first name"
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium">
              Last Name *
            </Label>
            <Input
              id="lastName"
              placeholder="Enter your last name"
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+234 xxx xxx xxxx"
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium">
              Location (State/City)
            </Label>
            <Input
              id="location"
              placeholder="e.g., Lagos, Nigeria"
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest" className="text-sm font-medium">
              Primary Interest *
            </Label>
            <select
              id="interest"
              className="w-full px-3 py-2 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background"
            >
              <option value="">Select your main interest</option>
              <option value="volunteering">Volunteering</option>
              <option value="advocacy">Policy Advocacy</option>
              <option value="education">Civic Education</option>
              <option value="monitoring">Election Monitoring</option>
              <option value="research">Research & Analysis</option>
              <option value="communications">Communications & Media</option>
              <option value="fundraising">Fundraising & Support</option>
              <option value="legal">Legal Support</option>
            </select>
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="experience" className="text-sm font-medium">
              Experience & Skills
            </Label>
            <Textarea
              id="experience"
              placeholder="Tell us about your background, skills, or previous experience in civic engagement, advocacy, or related fields..."
              className="border-primary/20 focus:border-primary min-h-[100px]"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="motivation" className="text-sm font-medium">
              Why do you want to join? *
            </Label>
            <Textarea
              id="motivation"
              placeholder="Share what motivates you to be part of this democratic movement..."
              className="border-primary/20 focus:border-primary min-h-[100px]"
            />
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 flex-1 sm:flex-none">
              <Users className="h-5 w-5 mr-2" />
              Join The Movement
            </Button>
            <div className="flex items-center text-sm text-muted-foreground">
              <Mail className="h-4 w-4 mr-2" />
              Questions? Contact us at{" "}
              <a href="mailto:info@vfdn.com.ng" className="text-primary hover:underline ml-1">
                info@vfdn.com.ng
              </a>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
