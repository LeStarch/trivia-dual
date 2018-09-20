from __future__ import print_function
import os
import sys
import uuid
import json
FIELDS=["title", "category", "question", "answers", "answer", "points"]

def print_question(question):
    '''
    Print the question
    '''
    print("Question:")
    for field in FIELDS:
        print("  {0}: {1}".format(field, question.get(field, "XX")))
    print("--------------------")
def input_field(field, question):
    '''
    Input a single field
    @param field: field to enter
    @param question: question to fill with field
    '''
    if field == "answer":
        while True:
            try:
                answers = "\n"
                for i in range(0, len(question["answers"])):
                    answers += "  {0}: {1}\n".format(i, question["answers"][i])
                question[field] = question["answers"][int(input("Select the correct answer: {0}".format(answers)))]
                break
            except Exception as e:
                pass
    else:
        question[field] = input("Please enter '{0}'{1}:".format(field, "" if field != "answers" else " (comma separated list)"))
        if field == "answers":
            question[field] = [f.strip() for f in question[field].split(",")]
        elif field == "points":
            question[field] = int(question[field])
def input_question():
    '''
    Input a question based on fields
    '''
    question = {"id": str(uuid.uuid4())}
    for field in FIELDS:
        while True:
            try:
                input_field(field, question)
                break
            except Exception as e:
                pass
        print_question(question)
    finished = "no"
    while finished.lower() != "yes" and finished.lower() != "y":
        print_question(question)
        finished = input("Is this correct? ")
        if finished.lower() != "yes" and finished.lower() != "y":
            fix = input("Which field to fix:")
            if fix in question:
                input_field(fix, question)
    return question
def main():
    '''
    Hi Lewis!!
    '''
    if len(sys.argv) != 2:
        print("[ERROR] Please supply file name to save to", file=sys.stderr)
        sys.exit(-1)
    elif os.path.exists(sys.argv[1]):
        print("[ERROR] File {0} exists, will NOT overwrite".format(sys.argv[1]), file=sys.stderr)
        sys.exit(-2)
    try:
        with open(sys.argv[1], "w") as f:
            questions = []
            finished = "no"
            while finished.lower() != "yes" and finished.lower() != "y":
                questions.append(input_question())
                finished = input("Are you finshed?")
            json.dump(questions, f, indent=2)
    except Exception as e:
        print("[ERROR] Failed".format(e), file=sys.stderr)
        sys.exit(-3)


if __name__ == "__main__":
    main()
