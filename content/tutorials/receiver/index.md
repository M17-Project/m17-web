+++
fragment = "content"
weight = 10
#background = ""
categories = ["Tutorial", "Receiver", "M17"]

title = "Build your own M17 Receiver"
#subtitle = ""
title_align = "left"

display_date = true
date = "2021-02-15"

summary = """
Building your own M17 receiver using a Raspberry Pi 3 or 4 is simple,
and fun to do!
"""

[sidebar]
  align = "right"

+++

# Building your own M17 receiver

You will need:
- a Raspberry Pi 3 or 4 with Raspbian (or Raspberry Pi OS) installed and SSH access.
- an RTL-SDR with known frequency offset
- optional: USB soundcard
- headphones or active speakers

1. Open up your RPi terminal. You can use SSH or GUI terminal, if you have a screen connected to your RPi.
2. Run the following commands:

`sudo apt update && sudo apt upgrade` :warning:	- this may take up to an hour to complete

`sudo apt install build-essential cmake git libusb rtl-sdr boost-devel aplay`

Install Dave Rowe's codec2

    git clone https://github.com/drowe67/codec2
    cd codec2-master
    mkdir build && cd build
    cmake ..
    make
    sudo make install
    cd ../..

Install m17-cxx-demod

    git clone https://github.com/mobilinkd/m17-cxx-demod
    cd m17-cxx-demod-master
    mkdir build && cd build
    cmake ..
    make
    sudo make install
    cd ../..6

3. Now that we have all the software installed and ready, try the following command:

`rtl_fm -E offset -p -2 -f 435.0000M -s 48k | m17-demod -l | aplay -r 8000 -c 1 -f S16_LE`

"-p -2" is the offset compensation. Use your own value here.

It is recommended to set the terminal window width to 132 characters. If you are using an external USB soundcard, you will need to know "where" it is in the system.
Run the following command to find out:

`aplay -l`

That should list all sound devices. An example would be for device 1, output 0 `(hw:1,0)`

Knowing where your soundcard is, try:

`rtl_fm -E offset -p -2 -f 435.0000M -s 48k | m17-demod -l | aplay -D plughw:1,0 -r 8000 -c 1 -f S16_LE`

That's it. A list of all received streams should appear in the terminal window. Voice is being decoded automatically and should be audible in the speakers/headphones.

***

## Setting up your M17 "beacon" transmitter (Windows + PlutoSDR method)

You will need:
- Windows 7 or 10
- PlutoSDR
- GNURadio
- .bin file with your audio/speech converted to M17 format

1. Install PlutoSDR drivers:
[https://github.com/analogdevicesinc/plutosdr-m2k-drivers-win/releases/download/v0.7/PlutoSDR-M2k-USB-Drivers.exe](https://github.com/analogdevicesinc/plutosdr-m2k-drivers-win/releases/download/v0.7/PlutoSDR-M2k-USB-Drivers.exe)

2. Install GNURadio:
[https://github.com/tfcollins/GNURadio_Windows_Build_Scripts/releases/download/1.5.0/gnuradio_3.7.11_iiosupport_win64.msi](https://github.com/tfcollins/GNURadio_Windows_Build_Scripts/releases/download/1.5.0/gnuradio_3.7.11_iiosupport_win64.msi)

3. Download m17-gr3.7.grc:
... no link yet

Open it up using GNURadio Companion, double click on "File Source" block on the left. Point it to the .bin file with your record. Double click on the "Variable, Id: frequency" block to set the frequency. 

4. Press the ">" button in the menu ("Execute the flow graph").

An empty window should pop up. Your PlutoSDR should transmit M17 voice frames until you close that window.