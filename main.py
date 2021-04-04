def on_button_pressed_a():
    basic.show_string("Pelancaran Bulan Sains, RBT & TMK")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    reromicro.read_line_sensors()
    if reromicro.line_sensor_detects_line(LineSensors.CENTER):
        reromicro.move_forward(35)
    elif reromicro.line_sensor_detects_line(LineSensors.LEFT):
        reromicro.turn_left(35)
    elif reromicro.line_sensor_detects_line(LineSensors.RIGHT):
        reromicro.turn_right(35)
    else:
        reromicro.brake()
basic.forever(on_forever)
