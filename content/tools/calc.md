+++
fragment = "item"
#disabled = false
date = "2017-10-04"
weight = 20
background = "dark"
align = "right"

title = "M17 Callsign Calculator"
#subtitle = ""

# Subtitle pre and post item
#pre = ""
#post = ""

[[buttons]]
  text = "Calculator"
  url = "/calculator"
  color = "success"
+++

Callsigns in M17 are base40 encoded.

9 characters from an alphabet of 40 possible characters can be encoded into 48 bits, 6 bytes. The base40 alphabet is:

* 0: A space. Invalid characters will be replaced with this.
* 1-26: “A” through “Z”
* 27-36: “0” through “9”
* 37: “-” (hyphen)
* 38: “/” (slash)
* 39: “.” (dot)

Encoding is little endian. That is, the right most characters in the encoded string are the most significant bits in the resulting encoding.

This calculator will encode and decode callsigns into a format that M17 can use.