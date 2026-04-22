/* ================================================================
   TU Audio Playlist Player — JavaScript
   Supports multiple independent playlist players on one page.
   Reads .single / .multi class on .tu-audio-player to determine
   whether to wire up playlist and transcript behavior.

   Usage: <script src="/_resources/js/tu-audio-player.js" defer="defer"></script>
   ================================================================ */

(function () {

  function formatTime(s) {
    if (isNaN(s)) { return '0:00'; }
    if (s === Infinity) { return '0:00'; }
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }

  function initPlayer(player) {
    const isSingle         = player.classList.contains('single');
    const audio            = player.querySelector('audio');
    const audioSource      = audio.querySelector('source');
    const btnPlay          = player.querySelector('.btn-play');
    const iconPlay         = player.querySelector('.icon-play');
    const iconPause        = player.querySelector('.icon-pause');
    const scrubber         = player.querySelector('.scrubber-input');
    const scrubFill        = player.querySelector('.scrubber-fill');
    const timeCurrent      = player.querySelector('.time-current');
    const timeDuration     = player.querySelector('.time-duration');
    const volumeInput      = player.querySelector('.volume-slider');
    const srStatus         = player.querySelector('.tu-player-sr-only');
    const playerTitle      = player.querySelector('.player-title');
    const trackItems       = player.querySelectorAll('.tu-playlist-item');
    const transcriptToggle = !isSingle ? player.querySelector('.transcript-toggle') : null;
    const transcriptPanel  = !isSingle ? player.querySelector('.transcript-panel') : null;
    const transcriptText   = !isSingle ? player.querySelector('.transcript-text') : null;

    // ── In single mode, set title from first track's data-title ──
    if (isSingle) {
      if (trackItems.length && trackItems[0].dataset.title) {
        playerTitle.textContent = trackItems[0].dataset.title;
      }
    }

    // ── Initialize first track on load ────────────────────────
    // Ensures play button works immediately without requiring
    // the user to select a track from the playlist first.
    if (trackItems.length) {
      audio.load();
      if (!isSingle) {
        const firstTranscript = trackItems[0].dataset.transcript;
        transcriptText.innerHTML = firstTranscript
          ? `<p>${firstTranscript}</p>`
          : '<p>Transcript not yet available for this track.</p>';
      }
    }

    // ── Populate track durations in playlist on load ──────────
    trackItems.forEach(item => {
      const duration = item.dataset.duration;
      const durationEl = item.querySelector('.track-duration');
      if (duration && duration !== '0:00' && durationEl) {
        durationEl.textContent = duration;
      }
    });

    // ── Load a track by playlist item ─────────────────────────
    function loadTrack(item, autoplay) {
      const src      = item.dataset.src;
      const title    = item.dataset.title;
      const duration = item.dataset.duration;

      audioSource.src = src;
      audio.load();
      playerTitle.textContent = title;

      trackItems.forEach(t => t.setAttribute('aria-current', 'false'));
      item.setAttribute('aria-current', 'true');

      scrubber.value = 0;
      scrubFill.style.width = '0%';
      timeCurrent.textContent = '0:00';
      timeDuration.textContent = duration !== '0:00' ? duration : '0:00';

      setPlayState(false);

      if (!isSingle) {
        const transcript = item.dataset.transcript;
        transcriptText.innerHTML = transcript
          ? `<p>${transcript}</p>`
          : '<p>Transcript not yet available for this track.</p>';
      }

      if (autoplay) {
        audio.play().then(() => setPlayState(true));
      }
    }

    // ── Sync play/pause UI ────────────────────────────────────
    function setPlayState(playing) {
      if (playing) {
        btnPlay.setAttribute('aria-label', 'Pause');
        iconPlay.style.display  = 'none';
        iconPause.style.display = '';
        player.classList.remove('is-paused');
        player.classList.add('is-playing');
      } else {
        btnPlay.setAttribute('aria-label', 'Play');
        iconPlay.style.display  = '';
        iconPause.style.display = 'none';
        player.classList.remove('is-playing');
        player.classList.add('is-paused');
      }
    }

    // ── Metadata loaded ───────────────────────────────────────
    audio.addEventListener('loadedmetadata', () => {
      scrubber.max = audio.duration;
      scrubber.setAttribute('aria-valuemax', Math.floor(audio.duration));
      timeDuration.textContent = formatTime(audio.duration);
    });

    // ── Timeupdate ────────────────────────────────────────────
    audio.addEventListener('timeupdate', () => {
      const current  = audio.currentTime;
      const duration = audio.duration || 1;
      scrubber.value = current;
      scrubFill.style.width = `${(current / duration) * 100}%`;
      timeCurrent.textContent = formatTime(current);
      scrubber.setAttribute('aria-valuenow', Math.floor(current));
      scrubber.setAttribute('aria-valuetext', `${formatTime(current)} of ${formatTime(duration)}`);
    });

    // ── Play / pause button ───────────────────────────────────
    btnPlay.addEventListener('click', () => {
      if (audio.readyState === 0) {
        const firstItem = trackItems[0];
        if (firstItem) {
          audioSource.src = firstItem.dataset.src;
          audio.load();
          audio.addEventListener('canplay', function onCanPlay() {
            audio.removeEventListener('canplay', onCanPlay);
            audio.play();
            setPlayState(true);
            srStatus.textContent = `Playing ${playerTitle.textContent}`;
          });
        }
      } else if (audio.paused) {
        audio.play();
        setPlayState(true);
        srStatus.textContent = `Playing ${playerTitle.textContent}`;
      } else {
        audio.pause();
        setPlayState(false);
        srStatus.textContent = 'Paused';
      }
    });

    // ── Track ended ───────────────────────────────────────────
    audio.addEventListener('ended', () => {
      setPlayState(false);
      srStatus.textContent = 'Playback ended';
    });

    // ── Scrubber ──────────────────────────────────────────────
    scrubber.addEventListener('input', () => {
      audio.currentTime = scrubber.value;
    });

    // ── Volume ────────────────────────────────────────────────
    volumeInput.addEventListener('input', () => {
      audio.volume = volumeInput.value;
      const pct = Math.round(volumeInput.value * 100);
      volumeInput.setAttribute('aria-valuenow', pct);
      volumeInput.setAttribute('aria-valuetext', `${pct}% volume`);
    });

    // ── Playlist and transcript — multi mode only ─────────────
    if (!isSingle) {

      trackItems.forEach(item => {
        item.addEventListener('click', () => {
          const isCurrentTrack = item.getAttribute('aria-current') === 'true';
          if (isCurrentTrack) {
            if (audio.paused) {
              audio.play();
              setPlayState(true);
              srStatus.textContent = `Playing ${item.dataset.title}`;
            } else {
              audio.pause();
              setPlayState(false);
              srStatus.textContent = 'Paused';
            }
          } else {
            loadTrack(item, true);
            srStatus.textContent = `Loading ${item.dataset.title}`;
          }
        });
      });

      transcriptToggle.addEventListener('click', () => {
        const isOpen = transcriptToggle.getAttribute('aria-expanded') === 'true';
        transcriptToggle.setAttribute('aria-expanded', String(!isOpen));
        transcriptPanel.classList.toggle('is-open', !isOpen);
      });

    }
  }

  document.querySelectorAll('.tu-audio-player').forEach(initPlayer);

})();
