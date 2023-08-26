$('document').ready(function(){

    const EMOTIVIDAD_INDICES = [1, 4, 7, 13, 10];
    const ACTIVIDAD_INDICES = [2, 5, 8, 11, 14];
    const REPER_INDICES = [3, 6, 9, 12, 15];

    const preguntas = {};

    for (let i = 1; i < 16; i++) {
        preguntas[i] = $("#pregunta-" + i);
    }

    $("[id^='pregunta-']").each(function() {
        let checkboxes = $(this).find('.respuesta > input[type="checkbox"]');
    
        checkboxes.change(function() {
            if ($(this).prop('checked')) {
                checkboxes.not(this).prop('disabled', true);
            } else { 
                checkboxes.prop('disabled', false);
            }
        });
    });

    $("#btn-update").click(function(){
        update_punt();
    });

    function update_punt() {
        let emotividad = 0;
        let actividad = 0;
        let reper = 0;

        for (let i = 1; i < 16; i++) {

            if (EMOTIVIDAD_INDICES.includes(i)) {
                if (preguntas[i].children().eq(2).children().eq(0).prop("checked")) {
                    emotividad += 10;
                }
                if (preguntas[i].children().eq(4).children().eq(0).prop("checked")) {
                    emotividad += 5;
                }
            }
    
            if (ACTIVIDAD_INDICES.includes(i)) {
                if (preguntas[i].children().eq(2).children().eq(0).prop("checked")) {
                    actividad += 10;
                }
                if (preguntas[i].children().eq(4).children().eq(0).prop("checked")) {
                    actividad += 5;
                }
            }
    
            if (REPER_INDICES.includes(i)) {
                if (preguntas[i].children().eq(2).children().eq(0).prop("checked")) {
                    reper += 10;
                }
                if (preguntas[i].children().eq(4).children().eq(0).prop("checked")) {
                    reper += 5;
                }
            }
        }
    
        $("#puntu_e").text("Emotividad: " + emotividad);
        $("#puntu_a").text("Actividad: " + actividad);
        $("#puntu_r").text("Repercusión: " + reper);
    }

});
