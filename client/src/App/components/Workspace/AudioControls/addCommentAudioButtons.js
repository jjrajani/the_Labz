import withAudioControls from './withAudioControls';

class addCommentAudioButtons extends withAudioControls {
    constructor(props) {
        super(props);

        this.controlGlyphs = [
            {
                glyph: 'play',
                title: 'Preview Track',
                glyph_wrapper_id: 'play_button',
                onClick: audioPlayerId => this.playAudio(audioPlayerId)
            },
            {
                glyph: 'pause',
                title: 'Pause Preview',
                glyph_wrapper_id: 'pause_button',
                onClick: audioPlayerId => this.pauseAudio(audioPlayerId)
            },
            {
                glyph: 'backward',
                title: 'Rewind Preview',
                glyph_wrapper_id: 'rewind_button',
                onClick: audioPlayerId => this.restartAudio(audioPlayerId)
            }
        ];
    }

    showAudioControls = () => {
        this.controlGlyphs.forEach(g => {
            let button = document.getElementById(g.glyph_wrapper_id);
            button.style.display = 'inline';
            button.style.visibility = 'visible';
        });
    };
}

export default addCommentAudioButtons;