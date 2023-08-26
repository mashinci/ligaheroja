from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')


@app.route("/champSelect")
def champ_select():
    return render_template('champSelect.html')

if __name__ == '__main__':
    app.run(debug=True)
    