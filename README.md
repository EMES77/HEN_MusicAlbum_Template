Tezos HTML Audio Player HTML Template by ©cryptemes

Version 2.03

Version 1.0 was programmed for ©stereohopper and released on hicetnunc.xyz as OBJKT#15472 on March 28, 2021
The NFT is offered on TEIA since the discontinuation of hicetnunc
teia.art/objkt/15472

The audio-files in this template are made by ©stereohopper - twitter.com/stereohopper

Works on TEIA, VERSUM and Hicetnunc (I have not tested minting it on OBJKT)

You may use the template as is. You only need to change your Cover-Image and the audio tracks.
Your are allowed to change and use the code to your liking.

The code is licensed as GNU GPLv3. In short:
- Do whatever you want with the code
- Use at your own risk
- Acknowledge the author/contributor
- If you redistribute the code you must do it open source and use the same licensing model

All HTML content needs to be minted in one folder. On TEIA or HEN you have to ZIP that folder for minting. On VERSUM you just point to the folder on your local machine without zipping it. 
You can have multiple files inside your zip, however there are a few requirements you can't miss. If you want you album to play longer than 30 minutes or have larger files than 100 MB you have the experimental possibility to host the files externally on IPFS.
If you want to do so, please read the document "Full_length_album_via_IPFS-todo.md"


1. Ensure to have no folder hierarchy. Put every file in the same folder than index.html.
2. Name your Cover Image "Cover.jpg". Make it 768 x 768 px. It will be used as thumbnail image as well.
3. If you want a video to play as Cover, put an mp4 with the name "Cover.mp4" in the folder.
4. Audio: Edit index.html - Change filename and displayed titles of your audio files. 
Add as many tracks as you want
If you put your audio-files within the folder, add a line as follows per each song <li audiourl="Filename_of_Song1.mp3">Displayed Title of Song 1</li>

If you want to experiment with hosting your audio files on pinata.cloud, add a line as follows per each song
<li audiourl="https://gateway.pinata.cloud/ipfs/QmZ2NqxCBTzoFWVSKzEvqqgYLEirUFRJqTxHoN1uzEKyY6">Displayed Title of Song 2</li>
5. Video: If you want to playback a different video for each song, you can put each video-file in the folder or on IPFS and add the attribute "videourl" in the <li> tag like so:
<li audiourl="Filename_of_Song1.mp3" videourl="URL to Videofile">Displayed Title of Song 1</li>. 
Read the document "Full_length_album_via_IPFS-todo.md" 

Fallback-Routine:
- For each track without the attribute "videourl" the Cover.mp4 will be played
- If there is no Cover.mp4 the Cover.jpg will be shown

Attention! Track-videos are not synced with the audio-tracks!

6. The maximum filesize of the ZIP must be under 100 MB. 
I have not tested this but I assume that if you use IPFS for hosting the mediafiles each file has a limit of 100 MB.




Features of the Player

playing a song:
- click the play-button
- press the space bar
- open the playlist by clicking on the three lines in the top right corner and choosing a song from the list


next and previous songs: 
- just keep it playing
- click the arrows
- press the left/right button

- UI Elements except for the progress bar will hide after 5 seconds of inactivity and show on moving the mouse or pressing a button


ATTENTION Versum-Minters!

Versum supports a range of Aspect Ration settings for interactive NFTs. 
Be sure to set the aspect ratio to either
Fixed size: 768x768 (it will always be 768x768, on smaller displays, parts of the cover might be cut off or you have to scroll)
Dynamic 1:1 (it resizes smaller than 768x768, but not larger because it's capped in the players code)
Fill (should work as well because the 1:1 ratio is set in the player code)

That's it!
