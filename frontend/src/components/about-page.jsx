import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Award,
  Briefcase,
  Calendar,
  Download,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";
import { Timeline } from "./ui/timeline";
import { TextReveal } from "./ui/text-reveal";

const timelineItems = [
  {
    id: "1",
    title: "Bachelor of Arts in Literature and Cultural Studies",
    description:
      "Currently pursuing degree at University of Southeastern Philippines, Bo. Obrero, Davao City. Specializing in literary analysis and cultural studies with focus on Bangsamoro literature and creative writing.",
    timestamp: "2022-2025",
    status: "active",
    icon: <GraduationCap className='h-3 w-3' />,
  },
  {
    id: "2",
    title: "Literary Exegesis of Narratives and Stories",
    description:
      "Participated in advanced workshop on narrative analysis and literary interpretation techniques.",
    timestamp: "2024",
    status: "completed",
    icon: <Award className='h-3 w-3' />,
  },
  {
    id: "3",
    title: "Methods in Cultural Studies Workshop",
    description:
      "Attended comprehensive workshop on research methodologies in cultural studies and analysis.",
    timestamp: "2024",
    status: "completed",
    icon: <Award className='h-3 w-3' />,
  },
  {
    id: "4",
    title: "DAGAYDAY: Mga Gapnud sa Manunulat",
    description:
      "BALCS Creative Writing Workshop focusing on developing writing skills and literary techniques.",
    timestamp: "2024",
    status: "completed",
    icon: <Award className='h-3 w-3' />,
  },
  {
    id: "5",
    title: "Creative Writing Webinar: The heART of the matter",
    description:
      "Webinar on finding your niche in fiction writing and developing unique narrative voice.",
    timestamp: "2024",
    status: "completed",
    icon: <Award className='h-3 w-3' />,
  },
  {
    id: "6",
    title: "International Affairs Division Intern",
    description:
      "Interned at University of Southeastern Philippines handling communication, document management, and administrative tasks. Developed proficiency in Microsoft Office Suite and organizational skills.",
    timestamp: "2023-2024",
    status: "completed",
    icon: <Briefcase className='h-3 w-3' />,
  },
  {
    id: "7",
    title: "International Conference on Arts and Sciences",
    description:
      "Participated in international conference exploring interdisciplinary approaches to arts and sciences.",
    timestamp: "2023",
    status: "completed",
    icon: <Award className='h-3 w-3' />,
  },
  {
    id: "8",
    title: "USeP-HANDURAWAN Member",
    description:
      "Active member of university organization, developing social skills through events and activities. Enhanced communication, teamwork, and problem-solving abilities in dynamic environments.",
    timestamp: "2022-2025",
    status: "completed",
    icon: <Users className='h-3 w-3' />,
  },
  {
    id: "9",
    title:
      "Seminar-Workshop on Current Trends in Creative Writing and Publishing",
    description:
      "Attended seminar on contemporary trends in creative writing and the publishing industry.",
    timestamp: "2022",
    status: "completed",
    icon: <Award className='h-3 w-3' />,
  },
  {
    id: "10",
    title: "International Conference on Bangsamoro Literature",
    description:
      "Participated in conference focusing on Bangsamoro literary traditions and contemporary works.",
    timestamp: "2022",
    status: "completed",
    icon: <Award className='h-3 w-3' />,
  },
  {
    id: "11",
    title: "SPJRD Talks: Cultural Studies",
    description:
      "Attended talks on cultural studies methodologies and contemporary cultural analysis.",
    timestamp: "2022",
    status: "completed",
    icon: <Award className='h-3 w-3' />,
  },
  {
    id: "12",
    title: "Creative Writing Workshop: Poetry for the Mindanawons",
    description:
      "2nd Session of the CAS' Webinar Series focusing on poetry writing for Mindanao writers.",
    timestamp: "2021",
    status: "completed",
    icon: <Award className='h-3 w-3' />,
  },
  {
    id: "13",
    title: "Training Workshop on the Basics of Scholarly Writing",
    description:
      "1st Session of the CAS' Webinar Series on academic and scholarly writing fundamentals.",
    timestamp: "2021",
    status: "completed",
    icon: <Award className='h-3 w-3' />,
  },
  {
    id: "14",
    title: "Academic Track - Humanities and Social Sciences",
    description:
      "Completed senior high school at Notre Dame University, Cotabato City, Philippines.",
    timestamp: "2020-2022",
    status: "completed",
    icon: <GraduationCap className='h-3 w-3' />,
  },
];

const getIcon = (type) => {
  switch (type) {
    case "education":
      return <GraduationCap className='h-5 w-5' />;
    case "work":
      return <Briefcase className='h-5 w-5' />;
    case "achievement":
      return <Award className='h-5 w-5' />;
    default:
      return <Calendar className='h-5 w-5' />;
  }
};

const getTypeColor = (type) => {
  switch (type) {
    case "education":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "work":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "achievement":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

const AboutPage = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Hero Section */}
      <section className='mb-16'>
        {/* <h1 className='text-3xl md:text-4xl font-serif font-normal text-foreground mb-8 max-w-3xl text-balance'>
          Hi, I'm a literature and cultural studies student with a passion for
          creative writing, exploring narratives through workshops, conferences
          and hands-on experience in literary analysis.
        </h1> */}
        <TextReveal className='text-3xl md:text-4xl font-serif font-normal text-foreground mb-8 max-w-3xl text-balance'>
          Hi, I'm Joeharah Mastura, A literature and cultural studies student
          with a passion for creative writing, exploring narratives through
          workshops, conferences and hands-on experience in literary analysis.
        </TextReveal>

        {/* Hero Image */}
        <div className='mb-8'>
          <img
            src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/writer-at-desk-with-books-and-art-supplies-natural-cQJsboOxXS8uFn0zChDiISOl1VFLKa.jpg'
            alt="Writer's workspace"
            className='w-full h-[400px] md:h-[500px] object-cover rounded-lg'
          />
        </div>

        {/* Two Column Layout: Info Card + Bio */}
        <div className='grid md:grid-cols-[250px_1fr] gap-8 mb-12'>
          {/* Left: Info Card */}
          <div className='space-y-4'>
            <div>
              <h3 className='text-sm font-medium text-primary mb-1'>
                Literature & Cultural Studies
              </h3>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <MapPin className='h-4 w-4' />
                <span>Davao City, Phillippines</span>
              </div>
            </div>
          </div>

          {/* Right: Bio Content */}
          <div className='space-y-6'>
            <p className='text-base leading-relaxed text-foreground text-pretty'>
              I am a passionate literature and cultural studies student at the
              University of Southeastern Philippines with a strong foundation in
              creative writing, literary analysis, and cultural research. My
              journey in literature has been enriched through numerous
              workshops, conferences, and hands-on experience in administrative
              and organizational roles.
            </p>
            <p className='text-base leading-relaxed text-foreground text-pretty'>
              With experience in{" "}
              <span className='text-primary font-medium'>
                creative writing workshops and conferences
              </span>
              , including specialized training in{" "}
              <span className='text-primary font-medium'>
                Bangasamoro literature
              </span>
              , <span className='text-primary font-medium'>poetry </span>and{" "}
              <span className='text-primary font-medium'>
                narrative analysis
              </span>
              , I've developed strong communication and organizational skills.
              My internship at the International Affairs Division honed my
              proficiency in document management and administrative tasks, while
              my involvement with USeP-HANDURAWAN stengthened my teamwork and
              problem-solving abilities
            </p>
          </div>
        </div>

        {/* Bottom Image */}
        <div>
          <img
            src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-creative-studio-space-with-large-windows-na-UewbnZHRp2asZKmsQ1R4XmrXq2p0It.jpg'
            alt='Creative studio space'
            className='w-full h-[400px] md:h-[500px] object-cover rounded-lg'
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className='mb-16'>
        <h2 className='text-3xl font-serif font-bold text-foreground mb-8 text-center'>
          My Journey
        </h2>
        <div>
          <Timeline
            items={timelineItems}
            variant='spacious'
            timestampPosition='inline'
          />
        </div>
      </section>

      {/* Thesis Section */}
      <section className='mb-16'>
        <Card className='p-8 bg-gradient-to-br from-primary/5 to-accent/5'>
          <div className='text-center'>
            <h2 className='text-2xl font-serif font-bold text-foreground mb-4'>
              Academic Thesis
            </h2>
            <h3 className='text-xl font-semibold text-primary mb-4'>
              "The Evolution of Narrative Voice in Contemporary Fiction"
            </h3>
            <p className='text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty'>
              An in-depth exploration of how modern authors are revolutionizing
              storytelling through innovative narrative techniques, examining
              the intersection of traditional literary forms with contemporary
              experimental approaches.
            </p>
            <Button className='gap-2'>
              <Download className='h-4 w-4' />
              Download Thesis (PDF)
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default AboutPage;
