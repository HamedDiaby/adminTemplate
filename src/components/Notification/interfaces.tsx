export interface NotificationProps {
    notificationMessage: string
    notificationType: keyof notificationType
    onClose: ()=> void
}

type notificationType = {
    error: 'error'
    success: 'success'
    alert: 'alert'
}
