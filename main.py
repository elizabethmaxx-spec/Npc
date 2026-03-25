from kivy.app import App
from kivy.uix.webview import WebView
from kivy.core.window import Window
from jnius import autoclass, cast

class NPCApp(App):
    def build(self):
        # Запрос разрешения на Overlay в Android
        self.request_overlay_permission()
        
        # Делаем окно прозрачным
        Window.clearcolor = (0, 0, 0, 0)
        
        # Загружаем твой сайт с NPC (локальный или с Vercel)
        return WebView(url="index.html")

    def request_overlay_permission(self):
        try:
            Settings = autoclass('android.provider.Settings')
            Context = autoclass('android.content.Context')
            Uri = autoclass('android.net.Uri')
            PythonActivity = autoclass('org.kivy.android.PythonActivity')
            activity = PythonActivity.mActivity

            if not Settings.canDrawOverlays(activity):
                intent = autoclass('android.content.Intent')(Settings.ACTION_MANAGE_OVERLAY_PERMISSION)
                intent.setData(Uri.parse("package:" + activity.getPackageName()))
                activity.startActivity(intent)
        except:
            print("Это не Android или ошибка доступа")

if __name__ == '__main__':
    NPCApp().run()
