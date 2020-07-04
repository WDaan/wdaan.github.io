<template>
    <div>
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase" ref="time"></h1>
                </div>
            </div>
        </header>

        <section class="contact-section bg-black pb mb-5">
            <div class="container">
                <div class="row radiosection">
                    <div class="mx-auto">
                        <audio
                            ref="radio"
                            src
                            autoplay="true"
                            controls="true"
                            volume="1.0"
                        ></audio>
                        <p class="text-white text-center mt-5">
                            Choose a channel below
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div id="stationbtns" class="row col mb-2 mt-1 m-1">
                        <div
                            @click="setStation(station)"
                            class="col-md- m-1"
                            v-for="station in radioStations"
                            :key="station.name"
                        >
                            <button class="btn btn-primary p-3">
                                {{ station.name }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import SetNavTitle from '@/mixins/SetNavTitle'

interface RadioStation {
    name: string
    url: string
}

@Component({
    name: 'Radio'
})
export default class AppsSection extends SetNavTitle {
    private initialStations: RadioStation[] = [
        {
            name: 'TOPRADIO',
            url: 'http://jwmp3.topradio.be/topradio.mp3'
        },
        {
            name: 'TOPSELECTION',
            url: 'http://str.topradio.be/TOPradioArena.aac'
        },
        {
            name: 'QMUSIC',
            url: 'http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_live_128.mp3'
        },
        {
            name: 'QMUSIC_NONSTOP',
            url:
                'http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_non-stop_128.mp3'
        },
        {
            name: 'MNM',
            url: 'http://icecast.vrtcdn.be/mnm-high.mp3'
        },
        {
            name: 'MNM_HITS',
            url: 'http://icecast.vrtcdn.be/mnm_hits-mid.mp3'
        },
        {
            name: 'MNM_URBANICE',
            url: 'http://icecast.vrtcdn.be/mnm_urb-high.mp3'
        },
        {
            name: 'STUBRU',
            url: 'http://icecast.vrtcdn.be/stubru-high.mp3'
        },
        {
            name: 'QMUSIC_DANCE',
            url:
                'http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_dance_128.mp3'
        },
        {
            name: 'RHR',
            url: 'http://stream.rhr.fm/'
        },
        {
            name: 'SLAM_HardStyle',
            url: 'http://streaming.slam.nl/web11_mp3'
        },
        {
            name: 'DANCE_UK',
            url: 'http://212.83.150.15:8022/stream/'
        },
        {
            name: 'DNB_RADIO',
            url: 'http://source.dnbradio.com/dnbradio_main.mp3'
        },
        {
            name: 'TRAP_FM',
            url: 'http://stream.trap.fm:6004/;stream.mp3'
        },
        {
            name: 'DUBBASE_FM',
            url: 'http://stream.dubbase.fm:7004/;stream.mp3'
        },
        {
            name: 'DNB_FM',
            url: 'http://stream.drumandbass.fm:9004/;stream.mp3'
        },
        {
            name: 'OUR_HOUSE_FM',
            url: 'http://shoutcast.ourhouse.fm:8055/;stream1.mp3'
        },
        {
            name: 'SLAM',
            url: 'https://stream.slam.nl/slam_mp3?allradio.nl&1547484924'
        },
        {
            name: 'DEEP_RADIO',
            url: 'http://stream.deep.radio/sd?allradio.nl&1547485103'
        },
        {
            name: 'Q_DANCE_RADIO',
            url: 'http://19993.live.streamtheworld.com/Q_DANCEAAC.aac'
        }
    ]

    interval: any

    openUrl(url: string) {
        window.open(url)
    }

    get radioStations() {
        return this.initialStations.sort(function(a, b) {
            const nameA = a.name,
                nameB = b.name
            if (nameA < nameB)
                //sort string ascending
                return -1
            if (nameA > nameB) return 1
            return 0 //default return value (no sorting)
        })
    }

    setStation(station: RadioStation) {
        const radio: any = this.$refs.radio
        radio.src = station.url
    }

    startTime() {
        const today = new Date()
        const time: any = this.$refs.time
        const minutes = this.checkTime(today.getMinutes())
        const seconds = this.checkTime(today.getSeconds())
        time.innerHTML = today.getHours() + ':' + minutes + ':' + seconds
    }

    checkTime(i: number): string {
        if (i < 10) {
            return '0' + i
        } // add zero in front of numbers < 10
        return i.toString()
    }

    mounted() {
        this.startTime()
        this.interval = setInterval(this.startTime, 1000)
    }

    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>
