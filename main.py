from android.permissions import request_permissions, Permission
from jnius import autoclass, cast

# Обращаемся к Android API
Settings = autoclass('android.provider.Settings')
Uri = autoclass('android.net.Uri')
PythonActivity = autoclass('org.kivy.android.PythonActivity')
Intent = autoclass('android.content.Intent')

def check_overlay_permission():
    activity = PythonActivity.mActivity
    # Проверяем, есть ли уже разрешение
    if not Settings.canDrawOverlays(activity):
        # Если нет, открываем настройки
        intent = Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION)
        intent.setData(Uri.parse("package:" + activity.getPackageName()))
        activity.startActivityForResult(intent, 1)
        return False
    return True

# Далее здесь запускается WebView с твоим HTML
