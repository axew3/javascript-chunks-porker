# javascript-chunks-porker
MDN javascript video recorder example, plus worker to upload streams chunks and php file for .webm storage
<a target="_blank" href="https://mdn.mozillademos.org/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element$samples/Example?revision=1135521">This mdn video recorder example</a> has been little improved to chunk the stream every 3 seconds (but it can be set at any time, like the max stream time duration), using a simple javascript worker that chains chunks and store the resulting .webm media via XHR calls to a php file.
   It for convenience close the recording process on browser, when time elapsed, simulating a click event.
