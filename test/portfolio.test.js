import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { PORTFOLIO_DATA } from '../src/data/portfolioData.js';

test('PORTFOLIO_DATA verification', async (t) => {
  await t.test('has all profile details', () => {
    assert.equal(PORTFOLIO_DATA.profile.name, 'Prabhav Narayanan');
    assert.equal(PORTFOLIO_DATA.profile.systemId, 'PRABHAV.exe');
    assert.ok(PORTFOLIO_DATA.profile.email.includes('@'));
    assert.ok(PORTFOLIO_DATA.profile.github.includes('github.com'));
    assert.ok(PORTFOLIO_DATA.profile.taglines.length >= 3);
  });

  await t.test('has exactly 6 operational channels', () => {
    assert.equal(PORTFOLIO_DATA.channels.length, 6);
    const codes = PORTFOLIO_DATA.channels.map(c => c.code);
    assert.deepEqual(codes, ['CH 01', 'CH 02', 'CH 03', 'CH 04', 'CH 05', 'CH 06']);
  });

  await t.test('has 6 flagship projects with required metadata', () => {
    assert.equal(PORTFOLIO_DATA.projects.length, 6);
    for (const proj of PORTFOLIO_DATA.projects) {
      assert.ok(proj.title, 'Project must have title');
      assert.ok(proj.year, 'Project must have year');
      assert.ok(proj.problem, 'Project must describe problem');
      assert.ok(proj.description, 'Project must describe solution');
      assert.ok(Array.isArray(proj.techStack) && proj.techStack.length > 0, 'Project must list stack');
      assert.ok(proj.badge, 'Project must have badge');
    }
  });

  await t.test('has skills in 4 core domains with valid ranges', () => {
    const domains = ['frontend', 'backend', 'aiAndAudio', 'tools'];
    for (const domain of domains) {
      assert.ok(Array.isArray(PORTFOLIO_DATA.skills[domain]), `Missing domain ${domain}`);
      assert.ok(PORTFOLIO_DATA.skills[domain].length >= 4);
      for (const skill of PORTFOLIO_DATA.skills[domain]) {
        assert.ok(skill.level >= 50 && skill.level <= 100);
      }
    }
  });

  await t.test('has musical instruments and valid frequency values', () => {
    assert.ok(PORTFOLIO_DATA.music.instruments.some(i => i.name === 'Violin'));
    assert.ok(PORTFOLIO_DATA.music.bands.some(b => b.name === 'Freefolks'));
    assert.ok(PORTFOLIO_DATA.music.bands.some(b => b.name === 'RITM'));

    // Verify Concert pitch A4 is 440 Hz
    const a4 = PORTFOLIO_DATA.music.frequencies.find(f => f.note === 'A4');
    assert.ok(a4);
    assert.equal(a4.freq, 440.00);
  });
});

test('Production build verification', async (t) => {
  await t.test('dist directory contains index.html and assets', () => {
    const distPath = path.resolve('dist');
    assert.ok(fs.existsSync(distPath), 'dist/ directory must exist');

    const indexPath = path.join(distPath, 'index.html');
    assert.ok(fs.existsSync(indexPath), 'dist/index.html must exist');

    const htmlContent = fs.readFileSync(indexPath, 'utf-8');
    assert.ok(htmlContent.includes('PRABHAV.exe'), 'Title or branding in index.html');
  });
});
