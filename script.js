// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
        audioSrc: "audio/consume.mp3",
        videoBgSrc: "videos/consume.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 0.8, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But, girl, I'm only human," },
            { time: 7, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" },
            { time: 13, text: "And you can take my flesh if you want girl" },
            { time: 16, text: "But, baby, don't abuse it (Calm down)" },
            { time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 22, text: "I'm praying that they're human" },
            { time: 25, text: "Please understand that I'm trying my hardest" },
            { time: 28, text: "My head's a mess, but I'm trying regardless" },
            { time: 31, text: "Anxiety is one hell of a problem" },
            { time: 34, text: "She's latching onto me, I can't resolve it" },
            { time: 37, text: "It's not right, it's not fair, it's not fair" },
            { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
            { time: 47, text: "Oh, no, no, no, ooh-ooh" },
        ]
    },  
    {
        id: 3,
        title: "Feel it",
        artist: "d4vd",
        album: "w",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1c/4a/d2/1c4ad2bd-efc3-0084-980f-003c01e4cfcd/24UMGIM24769.rgb.jpg/600x600cc.webp",
        audioSrc: "audio/feelit.mp3",
        videoBgSrc: "videos/feelit1.mp4",
        lyrics: [
           { time: 0.0, text: "What do you have in store?" },
            {time: 1.2, text: "One life away, we can't explore" },
            { time: 2.8, text: "But I don't want to get in the way no more" },
            { time: 4.9, text: "'Cause this the type of feeling you can't ignore, ay" },

            { time: 7.9, text: "I'm ready to break down the door" },
            { time: 8.8, text: "Settle the score, I can't let you go away" },
            { time: 12.0, text: "I miss the smile off your face" },
            { time: 13.5, text: "You know that I lo-lo-lo-love the chase" },

            { time: 15.0, text: "You told me once that I was crazy" },
            { time: 17.5, text: "I said, \"Baby girl, I know\"" },
            { time: 20.3, text: "But I can't let you go away" },
            { time: 21.8, text: "So don't you get me started now" },

            { time: 23.5, text: "I want a yes, I don't want maybes" },
            { time: 25.5, text: "'Cause they leave me where you found me" },
            { time: 30.0, text: "So don't leave" },

            { time: 31.4, text: "Ooh, I just love the way you got me feeling" },
            { time: 36.0, text: "And now I can feel it" },
            { time: 37.9, text: "It's like, ooh" },

            { time: 40.9, text: "Take away the pain, baby, I'm healing" },
            { time: 44.4,text: "Baby, I'm healing" },
            { time: 47.0, text: "I don't need anything more" },
            { time: 51.0, text: "Be the wave, I'll be the shore" },
            { time: 55.0, text: "Crashing all over me, I want you (fire)" },

            {time: 63.4, text: "What do you have in store?" },
            { time: 65.0, text: "Type of girl that make me drop dead on the floor" },
            { time: 67.3, text: "This the only girl that I love and adore" },
            { time: 69.0, text: "This the type of love that you can't ignore" },

            { time: 70.9, text: "I said, \"Hey, she comin' my way\"" },
            { time: 73.0, text: "She runnin' 'round sayin' whatever she wanna say" },
            { time: 75.2, text: "I told her I don't wanna have to do this every day" },
            { time: 77.0, text: "Told her that I love her, but she thinkin' it's a game" },

            { time: 79.0, text: "Oh, no, now she uncomfortable" },
            { time: 80.9, text: "Never wanna make it for one-dimensional" },
            { time: 82.9, text: "Oh, yeah, oh, nah-nah-nah" },
            { time: 85.2, text: "Don't know how we got here" },

            { time: 86.2, text: "Don't you get me started now" },
            { time: 87.3, text: "You told me once that I was crazy" },
            { time: 89.5, text: "I said, \"Baby girl, I know\"" },
            { time: 92.3, text: "But I can't let you go away" },

            { time: 93.9, text: "So don't you get me started now" },
            { time: 95.5, text: "I want a yes, I don't want maybes" },
            { time: 97.0, text: "'Cause they leave me where you found me" },
            { time: 101.6, text: "So don't leave" },

            { time: 102.9, text: "Ooh, I just love the way you got me feeling (oh, it got me feeling)" },
            { time: 108.4, text: "And now I can feel it (oh, it got me feeling)" },

            { time: 110.0, text: "It's like, ooh" },
            { time: 112.8, text: "Take away the pain, baby, I'm healing" },
            { time: 116.5,text: "baby, I'm healing (yeah, yeah, yeah, yeah)" },


            { time: 119.0, text: "I don't need anything more(oh)" },
            { time: 123.2, text: "Be the wave, I'll be the shore (oh)" },
            { time: 127.0, text: "Crashing all over me, I want you (oh, yeah, ah)" },
    ],
    },
 {
        id: 9,
        title: "Passionfruit",
        artist: "Drake",
        album: "More Life",
        albumArtUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg",
        audioSrc: "audio/drake_passionfruit_1.mp3",
        videoBgSrc: "videos/drake.mp4",
        lyrics: [
        { time: 0.0, text: "Hold on, hold on, fuck that" },
        { time: 2.9, text: "Fuck that shit" },
        { time: 5.9, text: "Hold on, I got to start this motherfuckin' record over again" },
        { time: 9.5, text: "Wait a minute" },
        { time: 11.0, text: "Fuck that shit" },
        { time: 12.4, text: "Still on this motherfuckin' record" },
        { time: 16.0, text: "I'ma play this motherfucka for y'all" },
        { time: 19.0, text: "Ayy, y'all get some more drinks goin' on" },
        { time: 20.5, text: "I'll sound a whole lot better" },
        { time: 39.0, text: "Listen" },

        { time: 40.5, text: "Seeing you got ritualistic" },
        { time: 44.8, text: "Cleansin' my soul of addiction for now" },
        { time: 48.8, text: "'Cause I'm fallin' apart" },
        { time: 56.0, text: "Yeah, tension" },
        { time: 57.7, text: "Between us just like picket fences" },
        { time: 62.0, text: "You got issues that I won't mention for now" },
        { time: 66.0, text: "'Cause we're fallin' apart" },

        { time: 73.5, text: "Passionate from miles away" },
        { time: 76.4, text: "Passive with the things you say" },
        { time: 79.2, text: "Passin' up on my old ways" },
        { time: 81.9, text: "I can't blame you, no, no" },

        { time: 90.5, text: "Passionate from miles away" },
        { time: 93.4, text: "Passive with the things you say" },
        { time: 96.5, text: "Passin' up on my old ways" },
        { time: 99.5, text: "I can't blame you, no, no" },

        { time: 124.5, text: "Listen" },
        { time: 127.0, text: "Harder buildin' trust from a distance" },
        { time: 131.4, text: "I think we should rule out commitment for now" },
        { time: 134.9, text: "'Cause we're fallin' apart" },

        { time: 141.5, text: "Leavin'" },
        { time: 143.5, text: "You're just doing that to get even" },
        { time: 148.7, text: "Don't pick up the pieces, just leave it for now" },
        { time: 152.0, text: "They keep fallin' apart" },

        { time: 157.5, text: "Passionate from miles away" },
        { time: 162.5, text: "Passive with the things you say" },
    
        {time: 165.5, text: "Passin' up on my old ways" },
        { time: 167.7, text: "I can't blame you, no, no" },

        { time: 175.5, text: "Passionate from miles away" },
        { time: 179.5, text: "Passive with the things you say" },
        { time: 182.5, text: "Passin' up on my old ways" },
        { time: 184.5, text: "I can't blame you, no, no" },

        { time: 212.0, text: "Um, trying to think of the right thing to say" }
        ]
    },
    {
        id: 10,
        title: "Moonlit Floor",
        artist: "lalalisa",
        album: "Santa",
        albumArtUrl: "https://t2.genius.com/unsafe/181x181/https%3A%2F%2Fimages.genius.com%2F5e82e575de6c3b1a12e5f978faff7c88.1000x1000x1.png",
        audioSrc: "audio/lisa.mp3",
        videoBgSrc: "videos/lisa.mp4",
        lyrics: [
         { time: 0.0, text: "Ooh, la-la-la" },
            { time: 8.2, text: "Ooh, la-la-la" },

            { time: 10.0, text: "I'ma need to hear you say it out loud" },
            { time: 14.5, text: "'Cause I love it when my name slips out your mouth" },
            { time: 19.0, text: "Love it when your eyes caress my body (oh-oh)" },
            { time: 23.0, text: "Right before you lace your kisses on me, ooh" },

            { time: 27.0, text: "Green-eyed French boy got me trippin'" },
            { time: 29.2, text: "How your skin is always soft" },
            { time: 31.5, text: "How your kisses always hit" },
            { time: 33.5, text: "How you know just where to" },

            { time: 35.5, text: "Green-eyed French boy got me trippin'" },
            { time: 38.0, text: "On that accent off your lips" },
            { time: 40.5, text: "How your tongue do all those tricks?" },
            {time :42.5,text:"How you know just where to"},
            { time:44.8, text: "Kiss me under the Paris twilight" },
            
            { time: 48.5, text: "Kiss me out on the moonlit floor" },
            { time: 53.0, text: "Kiss me under the Paris twilight (ah-ah)" },
            { time: 61.0, text: "So kiss me" },

            { time: 62.5, text: "Cute fit in the whip to the flight to the sky" },
            { time: 64.7, text: "Never down, baby, check my stats" },
            { time: 66.9, text: "Truth is, I wasn't tryna meet nobody" },
            { time: 68.8, text: "Baby, I was there to get my bag" },

            { time: 71.3, text: "But when I saw you I was like, \"I like that\"" },
            { time: 73.5, text: "Wasn't tryna to break, baby, I'll fall back" },
            { time: 75.6, text: "But when I heard you say, \"Bonjour, bébé\"" },
            { time: 77.9, text: "I was like, \"Damn\"" },

            { time: 79.5, text: "Green-eyed French boy got me trippin'" },
            { time: 81.8, text: "How your skin is always soft" },
            { time: 83.5, text: "How your kisses always hit" },
            { time: 86.0, text: "How you know just where to" },

            { time: 88.3, text: "Green-eyed French boy got me trippin'" },
            { time: 90.5, text: "On that accent off your lips" },
            { time: 92.7, text: "How your tongue do all those tricks?" },
            { time: 94.8, text: "How you know just where to" },

            { time: 96.9, text: "Kiss me under the Paris twilight" },
            { time: 101.5, text: "Kiss me out on the moonlit floor" },
            { time: 105.8, text: "Kiss me under the Paris twilight (ah-ah)" },
            { time: 113.0, text: "So kiss me" },

            { time: 114.4, text: "Ooh, them French boys got me trippin (Ooh-la-la-la)" },
            { time: 118.8, text: "Ooh, them French boys got me trippin (Ooh-la-la-la)" },
            { time: 123.0, text: "Ooh, them French boys got me trippin (Ooh-la-la-la)" },
            { time: 128.0, text: "Ooh, them French boys got me trippin'" },
            { time: 132.0, text: "Kiss me under the Paris twilight" },
            { time: 136.5, text: "Kiss me out on the moonlit floor" },
            { time: 140.8, text: "Kiss me under the Paris twilight" },
            { time: 148.0, text: "So kiss me" }]
                
            },

     {
        id: 8,
        title: "The Color Violet",
        artist: "tory lanez",
        album: "Alone at Prom",
        albumArtUrl: "https://t2.genius.com/unsafe/387x387/https%3A%2F%2Fimages.genius.com%2F3be07a6b868cacd8b452556295777267.1000x1000x1.png",
        audioSrc: "audio/tcv.mp3",
        videoBgSrc: "videos/tcv.mp4",
        lyrics: [
                  { time: 0.0, text: "..." },
            { time: 18.2, text: "I took my drugs and took my lovin' when I left out the spot" },
            { time: 23.0, text: "I left the party with a Barbie, markin' X on the dot" },
            { time: 27.8, text: "She calls my phone up but I told her, (I'm a loner) (uh)" },
            { time: 32.4, text: "But she likes my watch and my droptop and my persona (uh)" },
            { time: 37.0, text: "We hit the highway, 1-5-5, with my whole foot on the dash" },
            { time: 41.5, text: "She's in my ear, she's got no fear, she could care less if we crash" },
            { time: 46.2, text: "But on my radar, I've got some nerve to play hard" },
            { time: 50.3, text: "I waited for my chance, but playboys, we don't dance" },
            { time: 53.9, text: "I lost my heart" },

            { time: 56.8, text: "Speedin' car, goin' ninety in the rain" },
            { time: 60.7, text: "She took my heart, filled it with nothin' but pain" },
            { time: 65.3, text: "This beat in my dance is not for romance" },
            {time :69.5,text:"I wanna stay but, playboys, we don't dance, dance, dance"},
            { time: 75.0, text: "So I won't dance again (I), oh, baby" },
            { time: 79.4, text: "No, I won't dance again (that's why), ooh, yeah (uh)" },
            { time: 84.2, text: "No, I won't dance again (I)" },
            { time: 86.4, text: "No, I won't dance again" },
            
            { time: 89.0, text: "Pretty baby, ooh" },
            { time: 109.3, text: "Uh, face in the daylight, wastin' time on the stars in the sky" },
            { time: 114.5, text: "She's got my pager, blankets of love all on my eyes" },
            { time: 119.0, text: "Then I'm reminded, love don't come 'til you find it" },
            { time: 123.0, text: "I just hope that it's workin', I'm yearnin', I'm searchin', uh" },
            { time: 128.0, text: "The afterparty was on Wilson and 73rd" },
            
            { time: 132.7, text: "You got the notion that somebody else was with me first" },
            { time: 137.0, text: "But on my radar, you had some nerve to play hard" },
            { time: 141.0, text: "You took away my chance, but playboys, we don't dance, dance, dance" },
            { time: 145.0, text: "I lost my heart (uh)" },
            { time: 147.9, text: "Speedin' car, goin' ninety in the rain" },

            { time: 151.8, text: "She took my heart, filled it with nothin' but pain" },
            { time: 156.3, text: "This beat in my dance is not for romance" },
            {time :161.0,text:"I wanna stay but, playboys, we don't dance, dance, dance"},
            { time: 166.0, text: "So I won't dance again (I), oh, baby" },
            { time: 170.8, text: "No, I won't dance again (that's why), ooh, yeah (uh)" },
            { time: 175.6, text: "No, I won't dance again (I)" },
            { time: 178.0, text: "No, I won't dance again" },
            { time: 180.4, text: "Pretty baby, ooh" },
        
        
        
        
        
        
        ]
                
            },
                 {
        id: 2,
        title: "Ballad of a Badman",
        artist: "tory lanez",
        album: "Alone at Prom",
        albumArtUrl: "https://t2.genius.com/unsafe/387x387/https%3A%2F%2Fimages.genius.com%2F3be07a6b868cacd8b452556295777267.1000x1000x1.png",
        audioSrc: "audio/tcv1.mp3",
        videoBgSrc: "videos/tcv.mp4",
        lyrics: [
         { time: 0.0, text: "..." },
            { time: 2.7, text: "Ooh, you got me" },
            { time: 8.3, text: "Ooh, you got me" },
            { time: 14.8, text: "Ooh, you got me" },
            { time: 20.4, text: "Ooh, you got me" },
            { time: 23.0, text: "You have to leave, just stay for a while" },

            { time: 26.0, text: "The longer you stay, the better the time" },
            { time: 29.0, text: "You listen to your friends, they lie" },
            { time: 32.0, text: "I don't mind, I don't mind" },
            { time: 35.0, text: "Feelin's get caught up in the mind" },

            { time: 38.0, text: "A shootin' star pass by my eye" },
            { time: 41.0, text: "When I don't know just what to do" },
            { time: 44.0, text: "She won't blow my high" },
            {time :47.0,text:"Don't you stop turnin' me on (ooh, you got me)"},
            { time: 52.2, text: "I wanna feel like this all night long (ooh, you got me)" },
            { time: 58.7, text: "Don't you stop turnin' me on (don't you stop turnin' me on)" },
            { time: 64.0, text: "I wanna feel like this all night long (feel like this all night long, yeah)" },
            { time: 73.5, text: "Turnin' me on" },
            
            { time: 79.5, text: "All night, night, long (oh yeah)" },
            { time: 82.3, text: "You wanna stay, just stay for long" },
            { time: 85.3, text: "'Cause you got the sweetest touch I know" },
            { time: 88.4, text: "You might just dance with them other guys" },
            { time: 91.0, text: "But I don't mind, I know you're mine" },
            { time: 94.7, text: "I don't care just what they say" },
            
            { time: 97.4, text: "Lovin' you long takes the pain away" },
            { time: 100.0, text: "So when you look me in my eyes" },
            { time: 103.0, text: "Will you take some time?" },




            { time: 106.0, text: "Don't you stop turnin' me on (ooh, you got me)" },
            { time: 111.2, text: "I wanna feel like this all night long (ooh, you got me)" },

            { time: 117.7, text: "Don't you stop turnin' me on (don't you stop turnin' me on)" },
            { time: 123.0, text: "I wanna feel like this all night long (feel like this all night long)" },
            {time :133.0,text:"Turnin' me on"},
            { time: 138.5, text: "It's just, I can't fight this feelin' (all night, night, long)" },
            { time: 141.5, text: "Woah, oh-oh, ooh-woah, yeah" },
            { time: 147.0, text: "Ooh-woah, oh, oh" },
            { time: 150.0, text: "Yeah, yeah" },
            { time: 151.3, text: "I can't fight this feelin'" },
            { time: 153.4, text: "Woah, ooh-woah, oh, woah, ooh, yeah" },
            { time: 159.4, text: "Don't fight this feelin'" },
            { time: 161.9, text: "Don't fight this feelin'" },

            { time: 163.9, text: "ooh-woah, ooh-ooh, woah, oh'" },

            { time: 165.6, text: "Don't you stop turnin' me on (don't you stop turnin' me on, ooh, you got me)'" },
            { time: 170.9, text: "I wanna feel like this all night long (like this for oh, like this for oh so long)'" },
            { time: 177.5, text: "Don't you stop turnin' me on (don't you stop turnin' me on)'" },
        

            { time: 182.5, text: "I wanna feel like this all night long (feel like this all night long)'" },
            { time: 189.5, text: "Don't you stop turnin' me on (turnin' me on)'" },
            { time: 194.9, text: "I wanna feel like this all night long (all night, night long'" },

            { time: 200.9, text: "Don't you stop turnin' me on (ooh, you got me)'" },



            { time: 206.5, text: "I wanna feel like this all night long (all night, night long, ooh, you got me)'" },
            { time: 213.1, text: "Don't you stop turnin' me on (ooh, you got me)'" },

            { time: 218.0, text: "I wanna feel like this all night long (all night, night long, ooh, you got me)'" },
            { time: 225.0, text: "((Don't you stop turnin' me on (ooh, you got me))'" },
            { time: 231.0, text: "((Feel like this all night long (ooh, you got me))" },
            { time: 237.0, text: "((Don't you stop turnin' me on (ooh, you got me))" },
            { time: 243.0, text: "(((Feel like this all night long (ooh, you got me))" },
        
        
        
        
        
        ]
                
            },

                     {
        id: 2,
        title: "Die hard",
        artist: "kendrick lamar blxst & amanda reifer",
        album: "mr. morale & the big steppers",
        albumArtUrl: "https://t2.genius.com/unsafe/387x387/https%3A%2F%2Fimages.genius.com%2F2f8cae9b56ed9c643520ef2fd62cd378.1000x1000x1.png",
        audioSrc: "audio/a.mp3",
        videoBgSrc: "videos/a.mp4",
        lyrics: [
         { time: 0.0, text: "..." },
            { time: 4.7, text: "I pop the pain away, I slide the pain away" },
            { time: 7.0, text: "I pop the pain away, I slide the pain away" },
            { time: 10.4, text: "I picked you up when you fell and cut your knee" },
            { time: 20.0, text: "Told you not to cry and held you close to me" },

            { time: 29.0, text: "I hope I'm not too late to set my demons straight" },

            { time: 34.0, text: "TheI know I made you wait, but how much can you take?" },
            { time: 39.0, text: "I hope you see the God in me, I hope you can see" },

            { time: 43.4, text: "And if it's up, stay down for me, yeah" },
            { time: 47.0, text: "Shimmy, shimmy, cocoa puff" },

            { time: 49.5, text: "Serafina, flame in us" },
            { time: 52.0, text: "Where I'd be without your love" },

            { time: 54.4, text: "Rest your wings and trust, I feel you" },

            {time :56.6,text:"Deep (I know you feeling), deep (know you feel)"},
            { time: 59.3, text: "Deep (I know you feeling), deep (too deep, ooh)" },

            { time: 61.5, text: "Deep (I know you feeling), deep (deep, know you feel)" },

            { time: 64.0, text: "Deep (I know you feeling), deep (you)" },
            { time: 66.0, text: "Do you love me? (Okay) do you trust me? (Okay)" },
            
            { time: 68.2, text: "Can I trust you? (Okay) don't judge me (okay)" },


            { time: 70.6, text: "I'ma die hard, it gets ugly (okay)" },


            { time: 73.0, text: "Too passionate, it gets ugly (okay)" },
            { time: 75.8, text: "Mmh, ah" },
            { time: 78.8, text: "I wonder where I lost my way" },
            { time: 80.7, text: "Mmh, ah" },
            
            { time: 83.4, text: "Been waiting on your call all day" },



            { time: 85.4, text: "Tell me you in my corner right now" },
            { time: 87.7, text: "When I fall short, I'm leaning on you to cry out" },

            { time: 90.0, text: "We all got enough to lie about" },
            { time: 92.4, text: "My truth too complicated to hide now" },

            { time: 94.9, text: "Can I open up? Is it safe or not?" },
           


            { time: 97.0, text: "I'm afraid a little, you relate or not?" },
            {time :99.2,text:"Have faith a little, I might take my time"},
            { time: 102.2, text: "Ain't no saving face this time" },


            { time: 105.0, text: "I hope I'm not too late to set my demons straight" },

            { time: 110.0, text: "I know I made you wait, but how much can you take?" },



            { time: 115.0, text: "I hope you see the God in me, I hope you can see" },


            { time: 120.0, text: "And if it's up, stay down for me, yeah'" },


            { time: 123.2, text: "Shimmy, shimmy, cocoa puff" },
            { time: 125.6, text: "Serafina, flame in us'" },
            { time: 128.0, text: "Where I'd be without your love'" },
            { time: 130.3, text: "Rest your wings and trust, I feel you'" },

            { time: 133.0, text: "Deep (I know you feeling), deep (know you feel)" },

            { time: 135.0, text: "Deep (I know you feeling), deep (too deep, ooh)" },
            { time: 137.5, text: "Deep (I know you feeling), deep (deep, know you feel)" },
            { time: 139.5, text: "Deep (I know you feeling), deep (you)" },

            { time: 141.6, text: "I got some regrets (I-I-I-I, yeah, yeah)" },
            { time: 145.7, text: "But my past won't keep me from my best (I-I-I-I, yeah, yeah)" },
            { time: 150.2, text: "Subtle mistakes felt like life or death (I-I-I-I, yeah, yeah)" },


            { time: 154.5, text: "I wanna see the family stronger" },
            { time: 157.1, text: "I wanna see the money longer" },

            { time: 160.7, text: "You know that I'd die for you (I picked you up when you fell)" },
            { time: 165.3, text: "I get emotional about life" },
        
            { time: 167.0, text: "The lost ones keepin' me up at night" },
            { time: 169.8, text: "The world be reminding me it's danger" },


            { time: 171.8, text: "I still risk it all for a stranger" },

            { time: 176.0, text: "If I told you who I am, would you use it against me?" },

            { time: 178.0, text: "Right or wrong, no stone, just love to send me" },


            { time: 181.0, text: "I hope I'm not too late to set my demons straight" },


            { time: 186.0, text: "I know I made you wait, but how much can you take?" },
            { time: 191.0, text: "I hope you see the God in me, I hope you can see" },

            { time: 195.75, text: "And if it's up, stay down for me, yeah" },

            { time: 199.3, text: "Baby, you make me pray for London" },
            { time: 206.25, text: "Yeah, 'cause if I won it all without you involved" },
            { time: 212.7, text: "I guess it's all for nothing" },
        
        
        
        ]
                
            },
];



































let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();
