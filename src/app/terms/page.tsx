import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/shared/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — MeetBrains",
  description:
    "The agreement between you and Coding The Brains Ltd for using MeetBrains: what you may do, what we promise, and how billing works.",
};

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="6 August 2026"
      intro="These terms are the agreement between you and Coding The Brains Ltd for using MeetBrains. Using the service means accepting them."
    >
      <Section title="What the service is">
        <p>
          MeetBrains sends an AI agent to meetings on your behalf. The agent joins as a visible
          participant, can speak, and produces a transcript and report afterwards. It is software,
          not a person, and it can be wrong.
        </p>
      </Section>

      <Section title="Your account">
        <p>
          You need an account, you must give accurate details, and you are responsible for what
          happens under it. Keep your password to yourself. Tell us promptly if you think someone
          else has access.
        </p>
        <p>You must be at least 16 years old.</p>
      </Section>

      <Section title="Recording meetings, and your responsibility">
        <p>
          This is the most important clause here.{" "}
          <strong>
            You are responsible for having the right to bring a recording participant into any
            meeting you send an agent to.
          </strong>{" "}
          Many US states require every participant to consent before a conversation is recorded, and
          other countries have their own rules. We give you the tool; you decide where it is lawful
          to use it, and you tell the people in the room.
        </p>
        <p>
          You agree not to use MeetBrains to record anyone covertly, or in a meeting where you have
          been asked not to.
        </p>
      </Section>

      <Section title="What you may not do">
        <p>
          Do not use MeetBrains to break the law, to harass anyone, to infringe someone else&rsquo;s
          rights, or to gather information about people who have not consented to it. Do not try to
          breach or overload our systems, resell the service without our agreement, or upload
          material you do not have the right to use.
        </p>
        <p>
          We may suspend an account that is doing any of these, and we will tell you why.
        </p>
      </Section>

      <Section title="Your content stays yours">
        <p>
          Documents you upload, transcripts of your meetings and reports produced from them belong
          to you. You grant us only the permission needed to run the service: to store that material,
          process it, and pass it to the sub-processors named in our Privacy Policy. We do not use it
          to train models and we do not sell it.
        </p>
      </Section>

      <Section title="Plans, credits and billing">
        <p>
          Meetings are paid for with credits. Paid plans include an allowance that resets each
          billing period; unused included credits do not carry over, but credits you have separately
          purchased do.
        </p>
        <p>
          Subscriptions renew automatically until cancelled. You can cancel at any time and keep
          access to the end of the period you have paid for. Changing plans is charged pro rata by
          Stripe.
        </p>
        <p>
          If a meeting is charged but the agent never joins, the credit is returned automatically.
          Beyond that we do not generally give refunds, but if something goes wrong on our side,
          write to us — we would rather sort it out than argue about it.
        </p>
        <p>Prices may change. If they do, we will give you at least 30 days&rsquo; notice by email.</p>
      </Section>

      <Section title="What we do not promise">
        <p>
          The agent transcribes and summarises automatically, and it makes mistakes. It can mishear,
          attribute a remark to the wrong person, or summarise something inaccurately. Do not rely on
          a MeetBrains report as a legal, medical, financial or otherwise authoritative record
          without checking it.
        </p>
        <p>
          We depend on other services — the meeting platform, our AI providers, our hosting — and we
          cannot guarantee uninterrupted availability. The service is provided as is, without
          warranties beyond those the law requires and does not permit us to exclude.
        </p>
      </Section>

      <Section title="Liability">
        <p>
          To the extent the law allows, our total liability for any claim relating to MeetBrains is
          limited to what you paid us in the twelve months before the claim, and we are not liable
          for indirect or consequential losses such as lost profits or lost business.
        </p>
        <p>Nothing here limits liability for fraud, or for anything that cannot lawfully be limited.</p>
      </Section>

      <Section title="Ending the agreement">
        <p>
          You may close your account at any time. We may end or suspend the service for a serious or
          repeated breach of these terms, and we will explain why unless the law prevents us. When an
          account closes, your content is deleted as described in the Privacy Policy.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          These terms are governed by the laws of the State of Delaware, United States, and disputes
          will be handled by the courts there.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          We may update these terms. For material changes we will email you at least 30 days before
          they take effect, and continuing to use MeetBrains afterwards means accepting them.
        </p>
      </Section>
    </LegalPage>
  );
}
