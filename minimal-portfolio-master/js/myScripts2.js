$('.slide-submit').slideToSubmit();
$('.slide-submit').slideToSubmit({

    // Pixels from the right that is accepted as a full sid
    graceZone: 100,
    // Success text

    successText: 'Sending...',
    // Error text

    errorText: 'Check Required Fields',

    // Delay for showing successText

    submitDelay: 500


});
