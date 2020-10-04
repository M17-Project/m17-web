+++
fragment = "content"
#disabled = true
date = "2019-10-05"
weight = 100
background = "light"

title = "Get Involved!"
#subtitle = ""

[sidebar]
  title = "Links"
  align = "left"
  sticky = true # Default is false
  content = """
[M17 Github](https://github.com/M17-Project)

[TR-9 Github](https://github.com/M17-Project/TR-9)

[TR-9 Mainboard Bill of Materials](https://htmlpreview.github.io/?https://github.com/M17-Project/TR-9/blob/master/kicad/Mainboard/BOM/ibom.html)

[TR-9 HMI Bill of Materials](https://htmlpreview.github.io/?https://github.com/M17-Project/TR-9/blob/master/kicad/HMI/BOM/ibom.html)
"""
+++

---
What is M17?
------------

* M17 is a truly open, free to use digital radio system. The M17 standard, all schematics, PCB layouts and source code is available to use for free at the [GitHub pages](https://github.com/M17-Project).

How long has M17 been worked on?
--------------------------------

* Since the beginning of 2019.

Why develop M17?
----------------

* Mainly because there is no open platform for developing digital radio. By example, the DMR system while an ETSI open standard, is not amateur radio friendly. It cannot be experimented with. M17 aims to address this issue along with others, and provide better voice quality.

What is the main difference of M17 to existing digital standards, like DMR?
---------------------------------------------------------------------------

* M17 uses Frequency Division Multiple Access (FDMA) instead of Time Division Multiple Access (TDMA). FDMA in our case, allows for two 6.25kHz simultaneous links to be established on one 12.5kHz channel. Please read the M17 Specifications [HERE](https://m17-protocol-specification.readthedocs.io/en/latest/)

What vocoder is being used for M17?
-----------------------------------

* M17 uses [Codec2](http://www.rowetel.com/wordpress/?page_id=452), written and developed by David Rowe. Codec2 outperforms existing proprietary and patented (non-free) vocoders currently available.

Why not just implement Codec2 on top of an existing standard?
-------------------------------------------------------------

* As stated before, there are no open platforms to experiment with regarding digital voice. Current platforms were designed and developed to be a commercial success, instead of a social and hobbyist success. It's not the best idea to have many voice codecs within one standard. It causes incompatibility issues.

What is the encoded speech bitrate?
-----------------------------------

* The standard value is 3200 bits per second, but the M17 specification is subject to change. A variable bitrate may be supported in the future.

Does M17 support encryption?
----------------------------

* **Encryption is disabled by default** Yes, support for the Advanced Encryption System (AES) will be added with keys of different length. Encryption may be enabled where it is legal, **or disabled completely**.

How are users identified?
-------------------------

* User IDs are generated based on their callsigns. Base40 is used to [encode](https://m17.programradios.com/) the callsign into a 48-bit value. The user's ID can also be translated to a DMR Radio ID equivalent using a lookup table.

Can M17 be used on a DMR radio?
-------------------------------

* Most likely not. This is due to the current implementation of DMR using a proprietary codec.

Can I send data using M17?
--------------------------

* Yes, it is possible to send data packets exclusively, or alongside digital voice streams.

Can I link M17 with my DMR repeater?
------------------------------------

* Sure!

What are the radio internals?
-----------------------------

* The TR-9 radio includes an STM32F7 family microcontroller along with an ADF7021 RF front-end. An RF power amplifier, accelerometer, GNSS module, SD card slot, Kenwood-style connector, and an ESP8266 are also included.

Can I send APRS frames with it?
-------------------------------

* Yes.

Is M17 compatible with other digital voice modes, like DMR?
-----------------------------------------------------------

* No. This is due to the current implementation of DMR using a proprietary codec.

Can I switch an existing digital voice radio to be used with M17?
-----------------------------------------------------------------

* There is a great chance that could be done, but it would not be compatible with all radios - a different codec is used for speech.

How many people are working on M17?
-----------------------------------

* There are over 100 registered users on the forum. On IRC there is an average of about 45 people.
