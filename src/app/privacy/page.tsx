import type { Metadata } from "next";
import { LegalPage, Row, Section } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy - MeetBrains",
  description:
    "What MeetBrains collects when your agent attends a meeting, who processes it, how long it is kept, and how to get it deleted.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="6 August 2026"
      intro="MeetBrains sends an AI agent into your meetings, so this policy is mostly about one thing: what happens to the recording and transcript of a conversation you and other people took part in. It is written to be read, not to be survived."
    >
      <Section title="Who we are">
        <p>
          MeetBrains is operated by Coding The Brains LLC (&ldquo;we&rdquo;). We are the data
          controller for the information described here. You can reach us at hello@meetbrains.ai.
        </p>
      </Section>

      <Section title="What we collect">
        <dl>
          <Row term="Account">
            Your name, email address, password (stored only as a hash, never in readable form) and
            optional company name.
          </Row>
          <Row term="Meetings">
            The meeting link, title, and the times you scheduled. When your agent attends, we
            receive the meeting audio and store a transcript of what was said, along with the report
            generated from it.
          </Row>
          <Row term="Your material">
            Documents you upload to a knowledge base, and any background or instructions you give an
            agent.
          </Row>
          <Row term="Calendar">
            If you connect Google Calendar we read your upcoming events so meetings can be filled in
            for you. Read-only access. We never create, edit or delete anything in your calendar.
          </Row>
          <Row term="Billing">
            Your plan and credit history. Card details go directly to Stripe and are never sent to
            or stored on our servers.
          </Row>
          <Row term="Technical">
            Standard server logs, including IP address and timestamps, kept for security and
            debugging.
          </Row>
        </dl>
      </Section>

      <Section title="Other people in the meeting">
        <p>
          A meeting transcript contains other people&rsquo;s words, and they are not our customers.
          This is the part of this policy that deserves your attention.
        </p>
        <p>
          Our agent joins as a visible, named participant. It does not attend silently or disguise
          itself. Even so, <strong>you are responsible for having the right to bring a recording
          participant into a meeting</strong>. Many US states, and most of Europe, require the
          consent of everyone present before a conversation is recorded, and the rules differ by
          jurisdiction. Please tell participants the agent is attending. If someone objects, remove
          the agent.
        </p>
        <p>
          If you are in a meeting where a MeetBrains agent is present and you want the record of
          your contribution deleted, write to hello@meetbrains.ai and we will remove it, whether or
          not you are a customer.
        </p>
      </Section>

      <Section title="Who else processes it">
        <p>
          We use the following sub-processors. Each receives only what it needs to do its job.
        </p>
        <dl>
          <Row term="OpenAI">
            Receives meeting audio and transcript text so the agent can listen, speak and write your
            report, and processes documents you upload so the agent can refer to them. Used through
            OpenAI&rsquo;s API, which does not train on data submitted through it.
          </Row>
          <Row term="Recall.ai">
            Joins the call on our behalf and streams us the audio.
          </Row>
          <Row term="Amazon Web Services">
            Hosting, databases and email delivery. Data is stored in the United States.
          </Row>
          <Row term="Stripe">
            Payments. Stripe handles your card directly; we only see the plan and the outcome.
          </Row>
          <Row term="Google">
            Only if you connect Google Calendar, and only to read your events.
          </Row>
        </dl>
        <p>We do not sell your data, and we do not share it for advertising.</p>
      </Section>

      <Section title="How long we keep it">
        <p>
          Transcripts, reports and uploaded documents are kept until you delete them or close your
          account. Deleting a meeting removes its transcript and report. Closing your account
          removes your content within 30 days, except where we are required to keep billing records
          for tax and accounting purposes.
        </p>
        <p>Server logs are kept for 30 days.</p>
      </Section>

      <Section title="Your rights">
        <p>
          You can ask us for a copy of your data, ask us to correct it, or ask us to delete it, by
          writing to hello@meetbrains.ai. We will respond within 30 days. If you are in the EU, UK
          or California you have these rights under law; we extend them to everyone regardless of
          where you live.
        </p>
        <p>
          You can disconnect Google Calendar at any time in Settings, which revokes our access
          immediately.
        </p>
      </Section>

      <Section title="Security">
        <p>
          Traffic is encrypted in transit. Passwords are hashed. Access to production systems is
          limited to the people who operate the service. No system is perfectly secure, and we will
          not claim otherwise. If we ever discover a breach affecting your data, we will tell you.
        </p>
      </Section>

      <Section title="Children">
        <p>MeetBrains is not intended for anyone under 16, and we do not knowingly collect their data.</p>
      </Section>

      <Section title="Changes">
        <p>
          If we change this policy materially, we will email you before the change takes effect
          rather than quietly updating the date at the top.
        </p>
      </Section>
    </LegalPage>
  );
}
