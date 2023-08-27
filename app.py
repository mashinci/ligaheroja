from flask import Flask, render_template, request,jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')


@app.route("/submitDraftSelect", methods=['POST'])
def draft_submit():
    data = request.json
    blue_team = data.get('blue_team', [])
    red_team = data.get('red_team', [])
    
    response_data = {
        'message': 'Data received successfully',
        'blue_team': blue_team,
        'red_team': red_team
    }
    response_data['testKurcina'] = 'testiranje'
    print(response_data)
    print(type(response_data))
    return jsonify(response_data)


@app.route("/champSelect")
def champ_select():
    return render_template('champSelect.html')
if __name__ == '__main__':
    app.run(debug=True)
    