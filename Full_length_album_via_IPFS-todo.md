How to make the TEIA/HEN Music Album HTML Template OBJKT#25359 into a full length album:

Just a word upfront. This is a workflow that worked for my test. I share my knowledge with you 
but I’ll offer no guarantee nor do I take any liability for what you plan to do with it!

TEIA, Hicetnunc and VERSUM have a filesize-limit of 100MB which is a restriction coming from the file storage machanics. Files are stored on IPFS, the Interplanetary File System. If you want to know more about it, read here: ipfs.io

Also interactive HTML OBJKT are rendered inside a sandboxed iFrame. That means, Javascript from inside the iFrame cannot communicate with the outside. No interaction with the hosting page  hicetnunc.xyz and o loading media or other content from other domains. This is done to protect malicious attacks.

However, trusted sources are whitelisted by the developers which opens a possibility to load media from another IPFS source.

I tried hosting the files locally with IPFS Desktop (learn more about it on ipfs.io) but that won’t work. The files need to be pinned on multiple locations in a cloud to be accessible.

So here is what you need to do:

1) Make an account at pinata.cloud There is a free plan up to 1GB
2) Upload you media files
3) Inside the Template index.html you’ll find the list of tracks, looking like:
<ul class="plul">
  <li audiourl="01_stereohopper.mp3">Track 01</li>
  <li audiourl="02_stereohopper.mp3">Track 02</li>
  <li audiourl="03_stereohopper.mp3">Track 03</li>
  <li audiourl="04_stereohopper.mp3">Track 04</li>
</ul>
4) Right now the audiourl is pointing to the mp3-file inside the ZIP. We’ll change that.
5) Instead write: https://gateway.pinata.cloud/ipfs/
6) Go to you Pin manager on pirate.cloud where you uploaded your files earlier
7) Click the copy icon behind the IPFS CID of the audio file you want to insert
8) Paste the CID at the end of the URL 
9) It should look something like this now:
<ul class="plul">
  <li audiourl="https://gateway.pinata.cloud/ipfs/QmPcjl3k4h3432hl34IUZGH">Track 01</li>
  <li audiourl="https://gateway.pinata.cloud/ipfs/QmPcjl3k4h3432hl34IUZGH">Track 02</li>
  <li audiourl="https://gateway.pinata.cloud/ipfs/QmPcjl3k4h3432hl34IUZGH">Track 03</li>
  <li audiourl="https://gateway.pinata.cloud/ipfs/QmPcjl3k4h3432hl34IUZGH">Track 04</li>
</ul>

10) Delete the mp3 files from the Templates Folder


Don’t forget to test the player in the minting preview!

