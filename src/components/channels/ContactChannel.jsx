import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Github, Send, Copy, Check, Terminal, Radio } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactChannel({ onPlayClick }) {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const handleCopyEmail = () => {
    onPlayClick?.();
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    onPlayClick?.();
    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
      setIsSent(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#D9E32A', '#2F43FC', '#00E5FF']
        });
      } catch {
        // Safe catch
      }
    }, 1200);
  };

  return (
    <div className="p-3 sm:p-6 text-deepBlack font-display flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="border-b-4 border-deepBlack pb-2 mb-3 flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="font-pixel text-[9px] text-deepBlack/70">COMMUNICATION RELAY // CHANNEL 06</div>
          <h2 className="font-archivo text-xl sm:text-3xl uppercase tracking-tight">
            TRANSMISSION TERMINAL
          </h2>
        </div>
        <div className="flex items-center gap-1.5 font-pixel text-[9px] bg-deepBlack text-acid px-2.5 py-1">
          <Terminal className="w-3.5 h-3.5 text-signalCyan" />
          <span>CARRIER: ONLINE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
        {/* Contact Coordinates */}
        <div className="space-y-2.5 flex flex-col justify-between">
          <div className="bg-paperWhite border-3 border-deepBlack p-3.5 shadow-pixel space-y-3">
            <div className="font-pixel text-[9px] text-deepBlack/70 uppercase">
              TRANSMITTER COORDINATES:
            </div>

            {/* Email */}
            <div className="bg-acid/40 border-2 border-deepBlack p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 overflow-hidden">
                <Mail className="w-4 h-4 text-deepBlack shrink-0" />
                <div className="overflow-hidden">
                  <div className="font-pixel text-[8px] text-deepBlack/70">DIRECT INBOX:</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-display font-bold text-xs sm:text-sm text-deepBlack hover:underline truncate block"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                title="Copy Email"
                className="retro-btn p-1.5 bg-deepBlack text-acid hover:bg-zinc-800 border border-deepBlack shrink-0 ml-1"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-acid" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="bg-acid/40 border-2 border-deepBlack p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-deepBlack shrink-0" />
                <div>
                  <div className="font-pixel text-[8px] text-deepBlack/70">VOICE RELAY:</div>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                    className="font-display font-bold text-xs sm:text-sm text-deepBlack hover:underline"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
              <span className="font-pixel text-[8px] bg-deepBlack text-paperWhite px-1.5 py-0.5">
                IND
              </span>
            </div>

            {/* Location */}
            <div className="bg-acid/40 border-2 border-deepBlack p-2.5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-deepBlack shrink-0" />
              <div>
                <div className="font-pixel text-[8px] text-deepBlack/70">GEOGRAPHIC ORIGIN:</div>
                <div className="font-display font-bold text-xs sm:text-sm text-deepBlack">
                  {profile.location}
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="bg-acid/40 border-2 border-deepBlack p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-deepBlack shrink-0" />
                <div>
                  <div className="font-pixel text-[8px] text-deepBlack/70">CODE REPOSITORIES:</div>
                  <div className="font-display font-bold text-xs sm:text-sm text-deepBlack">
                    github.com/Prabhav04
                  </div>
                </div>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn p-1.5 bg-deepBlack text-acid hover:bg-zinc-800 border border-deepBlack font-pixel text-[8px] px-2"
              >
                VISIT
              </a>
            </div>
          </div>

          <div className="bg-deepBlack text-paperWhite p-2.5 border-2 border-deepBlack text-xs font-vt flex items-center justify-between">
            <span className="text-acid">SYS PROTOCOL: SMTP/TEL</span>
            <span className="text-signalCyan">RESPONSE: RAPID</span>
          </div>
        </div>

        {/* Transmission Dispatcher Form */}
        <div className="bg-paperWhite border-3 border-deepBlack p-3.5 shadow-pixel flex flex-col justify-between">
          <div className="font-pixel text-[9px] text-deepBlack/70 uppercase mb-2 flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-deepBlack" />
            <span>DISPATCH PACKET TO PRABHAV:</span>
          </div>

          {isSent ? (
            <div className="bg-acid border-2 border-deepBlack p-5 text-center my-auto shadow-pixel-sm">
              <div className="font-archivo text-xl mb-1 text-deepBlack">TRANSMISSION CONFIRMED!</div>
              <p className="font-display text-xs text-deepBlack/80 mb-3">
                Signal broadcast packet dispatched to Prabhav's console. I will respond to your frequency shortly.
              </p>
              <button
                onClick={() => {
                  onPlayClick?.();
                  setIsSent(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="retro-btn bg-deepBlack text-acid font-pixel text-[9px] px-3 py-1.5 border border-deepBlack"
              >
                SEND ANOTHER PACKET
              </button>
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-2 text-xs flex-1 flex flex-col justify-between">
              <div>
                <label className="font-pixel text-[8px] text-deepBlack/70 block mb-1">
                  CALLER / IDENTIFIER:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Neo / Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border-2 border-deepBlack p-2 text-deepBlack font-display text-xs focus:bg-acid/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-pixel text-[8px] text-deepBlack/70 block mb-1">
                  RETURN FREQUENCY (EMAIL):
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border-2 border-deepBlack p-2 text-deepBlack font-display text-xs focus:bg-acid/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-pixel text-[8px] text-deepBlack/70 block mb-1">
                  TRANSMISSION PAYLOAD (MESSAGE):
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Write your transmission or project inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border-2 border-deepBlack p-2 text-deepBlack font-display text-xs focus:bg-acid/20 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isTransmitting}
                className="retro-btn w-full mt-2 py-2.5 bg-deepBlack hover:bg-zinc-800 text-acid font-pixel text-[9px] border-2 border-deepBlack shadow-pixel-sm flex items-center justify-center gap-1.5 disabled:opacity-50"
              >
                {isTransmitting ? (
                  <span>BROADCASTING PACKET...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-signalCyan" />
                    <span>DISPATCH TRANSMISSION</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

