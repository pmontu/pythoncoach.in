import os
import pymongo
from bson import json_util
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.http import HttpResponse
from django.conf import settings

# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))


def fetchCourses(request):
    client = pymongo.MongoClient(settings.MONGODB_URL)
    db = client["PythonCoach"]
    collection = db["Course"]
    documents = collection.find()
    json = json_util.dumps(documents)
    return HttpResponse(json)
