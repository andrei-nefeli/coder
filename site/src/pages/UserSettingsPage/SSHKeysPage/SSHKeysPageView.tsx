import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"
import { GitSSHKey } from "api/typesGenerated"
import { AlertBanner } from "components/AlertBanner/AlertBanner"
import { CodeExample } from "components/CodeExample/CodeExample"
import { Stack } from "components/Stack/Stack"
import { FC } from "react"

export const Language = {
  errorRegenerateSSHKey: "Error on regenerating the SSH Key",
  regenerateLabel: "Regenerate",
}

export interface SSHKeysPageViewProps {
  isLoading: boolean
  hasLoaded: boolean
  getSSHKeyError?: Error | unknown
  regenerateSSHKeyError?: Error | unknown
  sshKey?: GitSSHKey
  onRegenerateClick: () => void
}

export const SSHKeysPageView: FC<React.PropsWithChildren<SSHKeysPageViewProps>> = ({
  isLoading,
  hasLoaded,
  getSSHKeyError,
  regenerateSSHKeyError,
  sshKey,
  onRegenerateClick,
}) => {
  if (isLoading) {
    return (
      <Box p={4}>
        <CircularProgress size={26} />
      </Box>
    )
  }

  return (
    <Stack>
      {/* Regenerating the key is not an option if getSSHKey fails.
        Only one of the error messages will exist at a single time */}

      {Boolean(getSSHKeyError) && <AlertBanner severity="error" error={getSSHKeyError} />}
      {Boolean(regenerateSSHKeyError) && (
        <AlertBanner
          severity="error"
          error={regenerateSSHKeyError}
          text={Language.errorRegenerateSSHKey}
          dismissible
        />
      )}
      {hasLoaded && sshKey && (
        <>
          <CodeExample code={sshKey.public_key.trim()} />
          <div>
            <Button onClick={onRegenerateClick}>{Language.regenerateLabel}</Button>
          </div>
        </>
      )}
    </Stack>
  )
}
